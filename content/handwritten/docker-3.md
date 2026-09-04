# Docker Notes: Multi-Container Apps, Docker Compose & Deployment

## Page 10: Container Networking (Continued)
* `(iv) docker build -t express-app .`
  `docker run --name express-container -d --rm --network favourite-net -p 3000:3000 <express-app>`
  *(Arrow: `This puts express-container in the same network as of the mongo container.`)*

* `-> Inside the express replace:`
  `'mongodb://localhost:27017/mydb'` => `The name of mongodb container (Just name).`

* `(v) When we were running mongo-container we didn't expose any port (eg: -p 27017:27017) because we don't need to.`
  * Docker resolve everything on its own in a network.

* **NOTE!** Docker network actually support diff kinds of "Drivers", which influence behavior of the network.
  * The default driver is **"Bridge"** => It provides the functionality of finding other container by its name.
  * `=> The diff drivers can be set:`
    * `--driver bridge`
    * `eg: docker network create --driver bridge my-net`
  * `=> Other drivers: host, overlay, macvlan, etc.`

---

## Page 11: Building Multi-Container Applications
* **5. Building Multi-container Application**
  * `=> When we are developing locally, means that our repo => local VS code. Other container => postgres, redis etc on container.`
    * In this case we don't need to worry about networking etc. Just `-p 5432:5432` & use that port with `localhost:5432` in repo `.env` & it will work.
  
  * `=> These networking is complicated/used when we have our repo => Running inside a container. Other services => also running inside a container.`
    * Now in this case we need to have their setup. How to make dockerfile of the project so that they all remain connected.

  * `=> Let's say I have 3 things to run, mongo-db, backend, React, & we want to run all three on diff container & connect them via docker network:`
    * `(i) docker network create my-net`
    * `(ii) Run mongodb:-`
      `docker run -d --name mongo-container --network my-net -p 27017:27017 mongo`
    * `(iii) docker build -t my-backend-image .`
      `docker run -d --name backend-container --network my-net -p 4000:4000 backend-image`
      * **NOTE!** Before making image you must rename localhost to mongo-container
        `eg: mongoose.connect("mongodb://mongo-container:27017/")`
        So, that they could find each other.

---

## Page 12: React and Container Networking Issues
* `(v) Similarly change the localhost to the backend-container name in the api call in React app.`
  * `eg: const API_URL = "http://backend-container:4000/api"`
  * `docker build -t frontend-image .`
  * `docker run -d --name frontend-container --network my-app-net -p 3000:3000 frontend-image`

* **But this above implementation has a bigger issue.**
  * The problem is React is running inside a container, but we know it should run in browser.
  * React inside container may send the code to the port & browser will receive it, but then in backend calling `axios.get("http://backend-container:4000/api")`
    * *(Arrow down)*
    * **Container knows what it is, but browser don't.** So, browser won't be able to connect to the backend.

* **Soln:** Run the react *(rest is cut off/implied to run locally or use reverse proxy/Nginx)*

---

## Page 13: Docker-Compose
* **6. Docker-Compose**
  * `=> One configuration file + Orchestration command (build, start, stop)`
  * `=> docker-compose is suited for managing multiple container on the one host not on multiple host.`

* **=> Writing docker-compose.yml :-**
  * we basically write all the containers (services) & its related command.
  * **docker-compose.yml :**
    ```yaml
    version: "3.8"
    services:
      mongodb:
        ---
      backend:
        ---
      frontend:
        ---
    ```
    *(Arrow: This is the general structure in which this file will be written)*

  * **eg:**
    ```yaml
    version: "3.8"
    services:
      mongodb:
        image: "mongo"
        volumes:
          - data:/data/db
        environment:
          - MONGO_INITDB_ROOT_USERNAME=Pankaj
          - MONGO_INITDB_ROOT_PASSWORD=secret
          # or
          - --env-file ./.env
          # or
        env_file:
          - ./env/mongo.env
        networks:
          - my-net
    ```
  * `We don't need to specify a network here because when we use docker-compose, docker automatically sets-up the networks.`

---

## Page 14: Docker-Compose Volumes & Build Context
* **NOTE:** If you are using named volumes, we must provide a name to the volume.
  ```yaml
  services:
    mongodb: -
    backend:
    frontend:
  volumes:
    data:  # => We are giving the volume a name, so we can mention this at other places.
  ```

* **Services: -**
  * `mongoDB:`
    `image: 'mongo'`
  * `Backend:`
    `image: 'express-image'` **OR**
    `build: ./backend` => *This will build the image from files of ./backend*
    `context: ./backend`
    `dockerfile: Dockerfile-name`

---

## Page 15: Utility Containers & Executing Commands
* **7. Working with Utility containers & executing commands in container**
  * We want to make utility container so, we don't need to setup the same thing everytime that we use in most of our project.
  * `eg: for running a Nextjs application, we need Node + Postgres + Redis setup all the time so, we will make a utility container for this.`

* `=> docker exec -it <container-id> npm init`
  `=> docker exec <container-id> npm init`
  * It means, go inside `<container-id>` & execute this command (`npm init`)
* `=> docker run -it <image-id> npm init`

* **Creating first utility container**
  * `=> Dockerfile in the project folder (only Dockerfile).`
  * `=> FROM Node:20-alpine`
       `WORKDIR /app`
  * `=> docker build -t node-utility .`
  * Now we can use this image to execute command & create project
    * `eg: docker run -it node-utility npm init`
  * `=> We can also bind our local repo with the container`
    * `eg: -v /path-to/your-local-repo:/app`

* **=> ENTRYPOINT ["npm"] in Dockerfile**
  * when executing commands like `npm run dev`, `npm init` etc let's say we only want npm command to be executed & no other command so, add Entrypoint as npm, your command concatenate in it.
  * `eg. install => npm install`
  * `start => npm start`

---

## Page 16: Deploying Docker Containers
* **9. Deploying docker containers**
  * **Development to production; things to watch out for**
    * `=> Bind mounts shouldn't be used in production.`
    * `=> Containerized apps might need a build step.`
    * `=> Multi container projects might need to be split (or should be split) across multiple hosts/remote machine.`

* **(1) A basic Node.js container deployment :-**
  * `=> Just a node.js app, no database, etc.`
  * `=> Will make 1 image -> 1 container.`
  * `=> Install docker on the remote host (eg via SSH) & push/pull images there.`
  * `=> Run container based on image on remote host.`
