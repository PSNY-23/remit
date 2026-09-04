# Docker Notes

## Page 1: Introduction & Installation
* **Why Docker :-**
  * To get all the dependencies inside containers so we can run it anywhere by anybody.
* **Container :-** Lightweight, portable, self-sufficient unit that packages software and its dependency.

* **Docker Architecture Flow:**
  * `Dockerfile` (text file containing instructions to build docker image) $ightarrow$ `Docker Image` (everything to run an application) $ightarrow$ `Run` $ightarrow$ `Container` (Running instance / machine wrapping OS/software).

* **Installation :-**
  * Download Docker Desktop for Windows.
  * **Docker Daemon :-** does everything, like image creation, application run/off, etc.
  * **Docker CLI :-** what we see and interact with.
* **Check Docker installed?**
  * `docker`
  * `docker -v`

* **To run an Image :-**
  * `docker run <IMAGE-NAME>`
  * `docker run -it <Image-name>` *(Interactive mode)*

* **To download an Image from DockerHub :-**
  * `docker pull <Image-name>`

---

## Page 2: Essential Docker Commands
* **1. `docker --version`**
* **2. `docker info`** $ightarrow$ No. of containers, images.
* **3. Commands related to image management :-**
  * `docker build -t <image-name>:<tag> .` $ightarrow$ Build image from Dockerfile.
  * `docker pull <image-name>`
  * `docker push <image-name>`
  * `docker images` $ightarrow$ List of all locally available images.
  * `docker rmi <image-id/name>` $ightarrow$ Remove image from local machine.
  * `docker tag <image-id> ...`
  * `docker run -it <image-name/id>`

* **4. Container Management :-**
  * `docker run -d -p 8080:80 --name <container-name> <image-name>`
    * `↳ -d` $ightarrow$ Detached mode.
  * `docker ps` or `docker container ls` $ightarrow$ List of all running containers.
  * `docker ps -a` or `docker container ls -a` $ightarrow$ All containers including stopped ones.
  * `docker stop <container-name>/ID`
  * `docker start <container-name>/ID`
  * `docker restart <container-name>`
  * `docker rm <container-name>`
  * `docker exec -it <container-name> sh`
  * `docker logs <container-name>`

---

## Page 3: Networks, Volumes & System Cleanup
* **5. Container Networks :-**
  * `docker network ls`
  * `docker network create <network-name>`
  * `docker network inspect <network-name>`

* **6. Volume Manager :-**
  * `docker volume ls`
  * `docker volume create <volume-name>`
  * `docker volume inspect <volume-name>`
  * `docker volume rm <volume-name>`

* **7. System Cleanup :-**
  * `docker system prune`
  * `docker image prune`
  * `docker container prune`

---

## Page 4: Container Interaction & Port Mapping
* **Viewing Containers & Managing State:**
  * To view all running containers: `docker container ls`
  * All the containers (run/off): `docker container ls -a`
  * To start/off any docker container: `docker start <name>`, `docker stop <name>`

* **NOTE: There are two types of terminals:**
  1. Terminal of your machine.
  2. Terminal of docker container.
  * **eg:** `docker exec <container-name> ls` $ightarrow$ gets you `ls` of that container in your machine's terminal.
  * **eg:** `docker exec -it <container-name> -it ls` (or `sh`) $ightarrow$ enters container's terminal directly.

* **Images Management:**
  * `docker images` or `docker image ls`

* **Port Mapping :-**
  * If we run a Node.js application in a container at Port `3000`, it won't be accessible in the browser on that port. You need to **expose** it from the container to access it outside the environment.
  * **Command:**
    ```bash
    docker run -it -p 1025:1025 <image-name>
    ```
    * `1025:1025` $ightarrow$ `container:port` mapped to host port.

---

## Page 5: Environment Variables & Layer Caching
* **Passing Environment Variables to Containers :-**
  ```bash
  docker run -it -p 1025:1025 -p 3000:3000 -e KEY=value -e KEY=value <Image-name>
  docker run -it --name my-container <Image-name>
  ```

* **How to containerize an application :-**
  1. Make a file named `"Dockerfile"`.
  2. Write all the steps to run the app.
  3. Make image: `docker build -t <Name-of-Image> <Path-of-dockerfile>`
  4. Run & push the image to Port or upload.

* **Layer Caching :-**
  * **NOTE:** Docker automatically has a feature of caching, meaning for running the image first time, it needs to do/install everything, but for 2nd time it will be faster.
  * It also checks which part of application has changed $ightarrow$ so recreate only those files.
  * **Keep in mind:** Put the **less modifiable files up** & **most modifiable at last** in the `Dockerfile`.

---

## Page 6: Docker Compose & Docker Networking
* **Docker Compose :-**
  * When we need to define **multi-container** Docker applications.
  * It helps to configure, run, and manage multiple containers that run together as part of a single application.
  * **Steps:**
    1. Make a file named `"docker-compose.yml"`.
    2. Define all the containers & its related config.
    3. Then run $ightarrow$ `"docker compose up"`
    4. Stop $ightarrow$ `"docker compose down"`

* **Docker Networking :-**
  * Docker networking is a way to connect Docker containers to each other and to the outside world, allowing them to communicate & share resources.
  * **Types of Docker Network :-**
    1. Bridge Network (default)
    2. Host network
    3. None
    4. Overlay
    5. Macvlan

  * **eg:**
    ```bash
    docker run -d --name web-container --network my-network web-image
    docker run -d --name db-container --network my-network mydb-image
    ```
    * `↳` So through network, web and db can talk to each other.
  * `docker network ls` $ightarrow$ To see all networks.

---

## Page 7: Building a Simple App & Dockerizing It
* **(1) Making a simple app & dockerize it :-**
  * Make the complete project etc.
  * Write the `Dockerfile` for it:
    ```dockerfile
    FROM node:23-alpine
    WORKDIR /app  # makes a folder & contain whole application
    COPY . .      # copy everything into that app folder
    CMD ["node", "index.js"]
    ```

* **After writing Dockerfile we need to build image from this:**
  * Go to the directory where Dockerfile is located.
  * `docker build -t my-simple-app .`
    * `-t` $ightarrow$ Name of the image.
    * `.` $ightarrow$ Use current directory as build context.

* **Run Image:**
  * `docker pull my-simple-app`
  * `docker run my-simple-app`

* **NOTE:** You can go into the shell of any container:
  * `docker exec -it <container-id/name> sh`
  * & then execute any command (e.g., `node index.js`, etc.).
