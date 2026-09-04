# ③ Manipulating containers with docker client

① List running containers
`docker ps`

④ Lifecycle of containers :-
`docker run <image-name>` => creating/Running a container from an image

`docker run` = `docker create` + `docker start`
↳ for creating a container from an image
↳ To starting a container

⑤ Restarting stopped container :-
=> `docker ps --all` (To see all the containers either running or stopped)
=> `docker run busybox echo hi there.`
=> We can stop & restart that same container
=> `docker start <container-id>`
   `docker start -a <container-id>` (-a)
   ↳ it gives you responses of container in your terminal

⑥ Removing stopped containers :-
=> `docker system prune`
   ↳ It will remove all stopped containers.
   ↳ all dangling images
   ↳ all build cache

⑦ Get log from a container
=> `docker logs <container-id>`

⑧ How to stop a running container
=> `Ctrl+C` (doesn't stop container) -> shut down after cleanup
=> `docker stop <container-id>`
   `docker kill <container-id>` => shut down immediately without doing any other work/cleanup

---

# ⑨ Multi-command containers :-

=> `docker run redis` (Get the redis image from docker hub & run it)
=> But we can access redis-cli because redis is running in a container & it will be accessible only inside that container (unless we expose port)

=> `docker exec -it <container-id> <command>`
   * `exec`: Run another command or Execute
   * `-it`: allows us to Provide input to the container
   * `<command>`: command जो execute करना है

eg: `docker exec -it <container-id> redis-cli`

⑩ Understanding -it flag :-
`-i` => The input of your terminal must goes into the STDIN.
`-t` => The input/output should be properly formatted

Whenever you run a command it has three channel:
* `ping google.com` -> STDIN | STDOUT | STDERR
* `echo hi there` -> STDIN | STDOUT | STDERR
* `redis-cli` -> STDIN | STDOUT | STDERR
  ↳ STDIN (Stuff you type from YOUR TERMINAL)
  ↳ STDOUT (Stuff that shows on screen on YOUR TERMINAL)

⑪ `docker exec -it <container-id> sh`
   ↳ gives you shell/termal access to that container
=> `Ctrl+D` or `exit` to exit out of container terminal

⑫ `docker run -it <container-id> sh`
   ↳ give a shell access to container

---

# Building custom images through docker server

① creating docker images :-
To create a dockerfile we need instructions, which tells docker server what to do.
eg: `FROM`, `RUN`, `CMD`

eg: 
```dockerfile
FROM node:20-alpine
RUN npm run dev
CMD ["redis-server"]
```

`[ Dockerfile ]` -> `[ Docker Client ]` -> `[ Docker Server ]` -> `[ Usable Image ]`

=> After making dockerfile
=> `docker build .`
   This will send build context to docker daemon or docker client.
=> for each steps of a dockerfile a temp container is created, then command of that step is run, then a snapshot of file is taken & with that a temp image is created.
=> Then When the command completes, the old container is deleted & the temp image will be used to create the temp container of next step.
=> This will keep on happening until last step where we get the final image

② Cache :-
Docker is amazing at caching.
=> When you first time build an image it caches all the temp images as well.
=> Now let's say you made some changes in the Dockerfile
=> Now docker wouldn't build the entire thing from begining
=> It will lookup in the new Dockerfile की किस जगह पर change हुआ है, वहाँ का temp image cache से लेकर continue करेगा
=> you can check it in command output of `docker build .` as well.

---

③ Tagging an image :-
`your Docker ID + / + repo/project Name + : + Version`
eg: `docker build -t yourDockerID/redis:latest .`

using this image :-
`docker run DockerID/redis`

④ Manual image generation With docker commit :-
let's say we are running some containers, & we will do a lot of other things later with that container as well, but at that time we want to take a snapshot of the container & make an image out of it (Without stopping the container)

=> Open other terminal
=> `docker ps` (Get all running containers)
=> take ID of the container
=> `docker commit -c 'CMD ["redis-server"]' <container-id>`
This will give you an image.

---

# Docker - Maximilian

**Foundation**
1. Getting Started
2. Images & containers
3. Managing data & working with Volumes
4. Networking (cross-container)
5. Building multi-container Application

**Real Life**
6. Utility containers
7. Executing commands in container
8. Docker compose (multi-contain)
9. Complex setup.
10. Deploying containers.
11. Docker Containers (Summary)

**Kubernetes**
12. Kubernetes
13. Kubernetes in Action
14/15. Kubernetes Deploying + Networking + Volumes.

---

# => Running first docker image of react application

① making Dockerfile
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

=> Then run :
`docker build .`
=> after this, it would start building the image.

=> you can also tag the image with.
`docker build -t my-image-name .`

=> To run the image/container
`docker run <container-id>` (or `<image-id>`)
`docker run -p 3000:3000 <image-id>`

=> When application is running your terminal will be blocked so, to stop the container go to another terminal &
=> `docker ps`
=> `docker stop <container-id>`

---

# => Attached vs Detached mode :-

When our terminal is in attached mode to the running container, it can input or get logs of that container.

For `docker run` => attached mode is default mode
For `docker start` => detached mode is default mode

But we can also define the mode at the time of running an image.
eg: `docker run -p 8080:8080 -d <container-id>`
(`-d` means run in detached mode, No terminal block)

=> We can also attach our terminal anytime to the running container anytime.
eg: `docker attach <container-id/name>`

=> Entering Interactive mode :-
① `docker run -it <container/image-id>`
   This way we will be directly interactive mode
② `docker start <container-id>`
   => But this is not interactive but detached mode
   => so how do we get the terminal access of this running container for taking output or giving input.
   => one way is to stop the container & again start it in attached mode
   eg: `docker start -a <container-id>`
   => But this will work for once & then behave strangely.
   Best way! `docker start -a -i <container-id>`

---

# => Inspecting Images :-

Images once created are read only. means that no file manipulation etc of the image.
`Image = FS + command Layer` (not editable)

But we can sneak into images
eg: `docker image inspect <image-id>`

# => Copying files into & from a container :-
`docker cp dummy/. boring-vaughan:/test`
`docker cp <source> <container>:/test`
↳ copy all files from dummy folder to the test folder of the running container boring-vaughan.

# => Naming & tagging Images & containers :-

**container naming**
`[ docker run -p 3000:3000 --name my-app <container/image-id> ]`

**Understanding Image Tags**
`Name:tag` -> defines a specialized image within a group of images.
↳ define a group of possible more specialized images.
eg: `node:18`

**naming images**
`[ docker build -t my-app:latest . ]`

---

# => Sharing Images & containers :-

If you have image you can run containers. But still we can share two things

* `Repo & Dockerfile` => You must `docker build.`
* `Built Image` => No need to build.
* `Built Image` => Just `docker run` => Recommended way

How to share images :-
=> Through docker hub
=> `docker push <image-name>`
=> `docker pull <image-name>`

steps:
=> go on docker hub, create a repo with some name.
=> Then come to your terminal, your image name should be same as the name of your repo on dockerhub.
=> `docker push <name>`
=> you may need to login.

---

# 3. Managing data & working with Volumes

**Images => read-only**
=> once image is made from the code, it's now fixed, you can't change the things of an image.
But you can make changes in your code & create an updated image again.

**Containers => When images run**
=> This is basically a new layer on top of images.
=> It can have app data, eg: text fetched from databases, users form data etc.
=> Data gets lost as container stops.

**Permanent App data** => eg: user account
=> Fetched/Produced in running container
=> Stored in files or a database
=> Should not lost when container stops
=> Read/Write Permanent, stored directly
=> Volumes & Volumes.

NOTE: in your IDE, you developed an app, dockerized it, made images, run containers. Now your changes in local IDE won't be reflected in your container app as there is no connection between.

**Volumes** => Volumes are folders on your local machine (hard-drive) which are mounted into containers.
eg:
`Your local machine (/some-path)` <---> `container (/app/user-data)`

To store something some where we define in our Dockerfile
`VOLUME ["/app/feedback"]`
↳ container को app के अंदर feedback folder में value को store करना है.


# Docker Notes: Volumes, Networks, and Variables

## Page 2: External Data Storage Mechanism
* **=> Docker External data storage mechanism:**
  Docker has two types of external data storages.
  1. **Volumes** (Managed by Docker)
  2. **Bind mounts** (Managed by you)

* **Volumes** are further divided into:
  * Anonymous Volumes
  * Named Volumes
  * *In Both the cases, docker setup a folder or `/path` on your local machine, exact location is unknown.*

* **Understanding all 3 :-**

* **(1) Anonymous Volumes :-**
  * `=>` Volumes is created automatically by docker when container runs & expects a volume. *(eg: due to a volume instruction in the image)*
  * `=>` No name is assigned to the volume.
  * `=>` Eg: In my Dockerfile we have a command like:
    `VOLUME /app/data` -> *This refers in the file system of container.*
  * `=>` When container runs, docker will set this folder in sync with another folder on (Linux VM) outside the docker engine.
    * eg: `/var/lib/docker/volumes/...` *(As of Linux VM outside docker engine)* `=>` `/app/data` *(As of container)*

---

## Page 3: Named Volumes and Bind Mounts
* **(2) Named Volumes :-**
  * `=>` you give a name to the volume when creating it.
  * `=>` The purpose is that, because we might be reusing the volumes again and again so we must have a readable name. Anonymous में नाम random ही होता है तो हम reuse नहीं कर सकते, Container stops होने पर delete हो जाता है automatically. (Anonymous name is random so we can't reuse it, when container stops it gets deleted automatically.)
  * `=>` Eg: 
    ```bash
    docker volume create mydata
    docker run -v mydata:/app/data <image-name>
    ```

* **(3) Bind mounts :-**
  * Mounting host system files/dir into the container.
  * Eg: `docker run -v /home/user/data:/app/data <image-id>`
  * When you make docker image, it takes the snapshot of the current state of application, Any change in the application won't get into the image or be reflected into the container.
  * But during development we can't build the image & run the image on each change in the code. (Impossible)
  * **Solution:** Bind your root project in the container using volume.
  * Eg: 
    ```bash
    docker run -d -p 3000:80 --rm --name feedbackApp -v "%cd%":/app/feedback <image-name>
    ```
    * `"%cd%"` -> Complete path to your project on local.
    * `/app/feedback` -> This volume is where feedback folder of the linux vm is mapped to the app/feedback of container.
  * **NOTE:** also check the permission of the project folder in Docker Preferences. it must be allowed. So that Docker can mount those folders.

---

## Page 4: Bind Mount Conflicts and Summary
* `=>` One more Problem that's very common in Bind mounts :-
  * When we try to connect our local repo to container using volume so that our local change gets reflected instantly in container, we our local binds may conflict with the installed files / files created due to Dockerfile in container.
  * **Eg:** `node_modules` folder is created by `RUN npm install` inside the container, but that will be replaced by the local `node_modules` if we bind our project.
  * **Sol =>** Dockerfile: `VOLUME ["/app/node_modules"]`
  * **OR =>** `-v /app/node_modules`

* **Summary :-**
  * `docker run -v /app/data` => Anonymous Volume
  * `docker run -v data:/app/data` => Named Volume
  * `docker run -v /path/to/code:/app/code` => Bind Mount

| Anonymous | Named | Bind Mount |
| :--- | :--- | :--- |
| Created for single container use only | It has a name | location of file is in the local fs. |
| Survives container shutdown/restart unless `--rm` is used. | do survive shutdown/restart but also removal. | not tied to any other container |
| Can not be shared across containers. | data is not specific to one container | Survives container shutdown/restart/removal on host fs. |

---

## Page 5: Read-Only Binds, Volume Management & Variables
* **Note 3 :-**
  * By default the folder we Bind to the repository folder in container, can be written and read `(rw)` permission.
  * But we want to only read the local repo in container, the container should not be able to write in local folder.
  * **Solution:** add `(ro)` read-only when creating bind-mount volume.

* **=> Managing docker volumes :-**
  ```bash
  docker volume create my-volume
  docker volume rm my-volume
  docker volume inspect my-volume
  docker volume prune
  ```

* **=> Using copy vs Bind mounts :-**
  * When we add our whole local repo as the bind-mount to the container, we actually don't need `[COPY . .]` in our docker file, because the container is in direct sync with our repo.
  * But this bind-mount is only for development, when image go for production we will need `[COPY . .]`. Therefore keep this in mind.

* **=> Arguments & environment variables :-**
  * Docker support build-time `ARGUMENTS` and runtime `Environment variables`.
  * **Environment variables:**
    * Available inside of Dockerfile & in application code
    * set via `ENV` in dockerfile or `-e` / `--env` on docker run
  * **ARGUMENTS:**
    * Available inside of Dockerfile, not accessible in CMD or any app code.
    * Set on image build (`docker build`) via `--build-arg`

---

## Page 6: Setting ENV and ARG Variables
* **(1) Inside dockerfile:**
  ```dockerfile
  ENV PORT 80
  EXPOSE $PORT
  ```

* **(2) At the docker run time:**
  ```bash
  docker run -d -e PORT=80 <image>
  # OR
  docker run -d --env PORT=80 <image>
  ```

* **(3) Passing .env file itself:**
  ```bash
  docker run -d --env-file ./.env <image>
  ```

* **Eg: for Arguments :-**
  ```dockerfile
  ARG DEFAULT_PORT=80
  ENV PORT $DEFAULT_PORT
  ```
  * we can pass the argumt at creating image.
  * eg: `docker build --build-arg DEFAULT_PORT=8000`

---

## Page 7: Networking (Cross-container communication)
* **4. Networking (Cross-container communication)**
  * What if your container wants to fetch external api, talk to other container, or between a container & your host-machine.
  * *(Diagram: `Running Container 1` interacting with `WWW`, `Other Container 2 (eg: PostgreSQL)`, and `Host Machine`)*
  * **WWW Note:** Container can directly send req. to WWW. We don't need to expose anything or do any setup.

* **Problem statement :-**
  * Let's say you made a node.js application (express) & it runs on Port 3000, & also connects to local mongo db using `database_URL='mongodb://localhost:27017/mydb'`
  * But To dockerize & run it we did:
    `docker run -d -p 3000:3000 <image-id>`
  * This will give error, because this container doesn't expose any port or thing like `27017` & so no connection with mongodb server.

* **Soln (1) :** Most of the time all your services will be running on localhost: Port. So when you refer any external server inside a container:
  * `localhost => host.docker.internal`
  * *(replace local host with this)*
  * `=>` Remember this (`host.docker.internal`) is just for communication between your host-machine & container.
  * `=>` The above example of mongodb works because your mongoDB is running on localhost of the host-machine & not inside some other container.

---

## Page 8: Container-Container Networking
* **Container-Container networking :-**
  * `->` we already have node.js application running in a container.
  * `->` We need another container (eg: for Mongodb).
    * `(i)` pull mongodb image
    * `(ii)` `docker run <mongo-image>`
    * `(iii)` Now we have a container, inside which a mongodb is running.
    * `(iv)` `docker container inspect <mongodb>`
      * `->` you can get `IPAddress` from the logs.
      * `->` This IP address can be used to contact this container.
    * `(v)` Now replace the `localhost -> IPAddress (of mongo container)` of `DATABASE_URL`
  * `->` But this approach is not good, because the IPAddress may change when you re-start the container again. & then you will need to update the IPAddress with the new one.

* **=> Better way :- Creating docker Networks :-**
  * `(i)` `docker run -d --name mongodb --network favourite-net <image-name>`
  * **NOTE!** But before using (`favourite-net`) we must create it. docker won't create it automatically like volume.
  * So,
    * `=> docker network create favourite-net`
    * `=> docker network ls`
  * `(ii)` Now the mongodb is part of `favourite-net` network and you can attach other container also to this network. Then they can talk to each other.
  * `(iii)` When two container are part of same network, then you actually don't need to care about the IPAddress. Just put the name of the container in "localhost".
  * *एक दूसरे के नाम से पूछेंगे (They will ask/resolve by each other's names)*


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
