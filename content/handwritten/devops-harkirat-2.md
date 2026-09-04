# DevOps & Docker Notes - Part 2

## CI/CD and Monorepo Deployment
* Now we have the monorepo, which has 3 projects: `http`, `ws`, and a `web` (frontend).
* Start all the three projects on the VM.
* **CI-CD:** We push our code to GitHub, it will have 2 branches: **Production branch** & **main branch**.
* We will have 2 files in the `.github/workflows` folder:
  * `production.yml` & `main.yml`, so whenever any commit happens in any branch, GitHub knows what to do.
  * `production.yml` -> contains instructions on how to push/deploy to the production server.
  * `main.yml` -> instructions on how to deploy on the main server.
* Now for GitHub to deploy to the VM, it must need access to the VM using SSH.
* We will make a `key-gen` (Public-Private Key Pair):
  * Public key will be stored on the VM (`~/.ssh/authorized_keys`).
  * Private key -> My Mac / GitHub secrets -> Both will have the private key so that both can access the VM.

---

# Week-26 (Day-1) - Docker

### 1. Why Docker?
* Kubernetes / container orchestration.
* Running process in isolated environment.
* Starting project / aux. services locally.

### 2. Containers Why?
* Everyone has a different OS.
* Steps to run a project can vary based on the OS.
* Extremely harder to keep track of dependencies as a project grows.

**Benefits of using containers:**
* All configuration in a single file.
* Can run in isolated environment.
* Make local setup of OS projects a breeze.
* Makes installing auxiliary services/DBs easy.

### 3. Docker CLI :-
* To start/stop docker engine => `docker run -d -p 27017:27017 <image-name>` (Linux)
* For Windows -> It's better to use Docker Desktop UI to start/stop.
* To run an image => `docker run <image-name>` *(अगर image present होगा तो run कर देगा वरना dockerhub से pull करना शुरू कर देगा automatically)*
* To expose port => `docker run -p 27017:27017 <image-name>`

| Command | Description |
| :--- | :--- |
| `docker images` | Shows all images |
| `docker pull <image-name>` | To add/download image |
| `docker rmi <image-name/image-id>` | To remove image |
| `docker ps` | All running containers |
| `docker ps -a` | Running + stopped containers both |
| `docker stop <container-id/name>` | Stop container gracefully |
| `docker kill <container-id>` | जबर्दस्ती बंद कर देता (Instant/Hard kill) |

---

### 4. Image vs Containers :-
* e.g., Codebase on GitHub $ightarrow$ **Image** (Running picture of the codebase/image) $ightarrow$ **Container**.
* There are only a few commands we have for images; all other commands are for containers.
* `docker images`
* `docker pull <image-name>`
* `docker build -t <image-name> .` (To create an image)
* `docker rmi <image-name/id>`
* `docker push <your-username>/<image-name>` (Push to DockerHub)

### 5. Port Mapping :-
* To connect the internal port of a docker container to the host machine port.
* `-p <host-port>:<container-port>`
  $$\downarrow$$
  Outside world will hit this port.

### 6. Other Commands :-
* `docker kill <container-id>` => जबर्दस्ती बंद कर देता (Instant)
* `docker stop` => Gracefully shuts down.
* `docker pause` => Process is situ in memory, but freeze हो जाता है।
* `docker unpause` => Resume the process.
* `docker restart` => Like refresh.

---

### 7. Exec Commands :-
* If you want to run something / do something inside the already running docker containers.
* `docker exec [options] <container-id/name> <command>` (e.g., `bash`, `sh`, `ls`, etc.)
* Flags: `-i`, `-t`, `-d`
  * `-i` (Interactive mode) -> allows input.
  * `-t` (Tty mode) -> like terminal, your terminal has now access to the container terminal.
  * `-d` (Detached mode) -> background में command run करेगा, terminal will remain free.

### 8. Dockerfile :-
* It is a text document that contains all the commands a user could call on the command line to create an image.
* **How to create a dockerfile :-**
  (i) Base image (`FROM <base-image>`)
  (ii) Bunch of cmds that you run on the base image.
* Let's say I have an express application, which has a route for Hello World.
* **Writing dockerfile for this app :-**
  1. Make a file named `dockerfile` in the root of your project.
  2. Dockerfile contents:
     ```dockerfile
     FROM ubuntu  # or FROM node:22
     RUN apt-get update && apt-get install -y nodejs
     WORKDIR /app
     COPY . .
     RUN npm install
     RUN npm run build
     EXPOSE 3000
     CMD ["node", "dist/index.js"]
     ```
     * `CMD` => You can have only one `CMD` in your Dockerfile. It runs when the container starts, *not* at the time of image making.

---

### 9. After Writing Dockerfile :-
* Make a `.dockerignore` file. This file will ignore all the folders/files that it contains while copying to the working directory.
* **How to make images from this app using dockerfile :-**
  `docker build -t <image-name> .` (*वो नाम जो तुम इस image को देना चाहते हो*)
* **Passing env variable while running the run command :-**
  `docker run -e DATABASE_URL=postgres://... <image-name>`

### 10. Layers :-
* When you make a Docker image, वह एक-एक step (like installing something, copying files) के लिए अलग layer create करता है।
* Each instruction in your Dockerfile creates a new layer.
* Layers = a small part of your final image.
* Docker places these layers in a stack. When possible, it reuses old layers (**Caching**).

**Optimizing Express App Dockerfile (for better caching):**
```dockerfile
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install
COPY . .
```

---

### 11. Networks & Volumes :-
* When you have multiple containers running in which you:
  (i) Need to persist data across docker restarts.
  (ii) Need to allow containers to talk to each other.
* **Networks** $ightarrow$ When two containers need to talk to each other, they need a network. (e.g., app server $ightarrow$ database).
* Containers can easily access the IP address of the container in the network & send/receive messages.
* e.g., Let's say you run two containers: one for MongoDB and another for your express application. Now the express application needs to talk to the database (other container) but it can't do it without a network.
