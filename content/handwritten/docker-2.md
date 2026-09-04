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
