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
