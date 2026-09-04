# DevOps Cohort (Week 21-25 Notes)

## Page 1: IP Addresses, MAC Address & Networking Basics
* **How to see IP address in windows:**
  * `ipconfig`
    * `↳` IPv6
    * `↳` IPv4

* **IP Address:** It's a unique identifier assigned to each device that is connected to a network.
* **MAC Address:**
  * `->` It's a unique hardware identifier.
  * `->` It's hardcoded in hardware.
  * `->` You can't change it normally (MAC spoofing to change it).
* **Serial No:** It's specific to your laptop.
  * `->` Command: `wmic bios get serialnumber`

* **Networking Basics :-**
  * Let's say many devices are connected to a network, how would they communicate with each other? There has to be some address of each device so that device A would know where to send data so that other device receives it.
  * `->` Diff network, diff IP address.
  * `->` When you are in home, home router will provide you an IP address.
  * `->` Similarly, coffeeshop IP address, office IP address etc.

---

## Page 2: Private vs. Public IP & SSH Protocol
* **Private vs Local IP :-**
  * Used within local networks.
  * Not accessible via internet.
  * The devices under a network communicate via Private IP.
* **Public IP :-**
  * Public IP addresses are assigned by ISP (Internet Service Provider).
  * Your home router has a single public IP address.

* **SSH Protocol (Secure Shell) :-**
  * `->` It's a cryptographic network protocol that allows secure communication between two systems.
  * `->` For remote administration.
  * `->` It's like logging into a remote server & executing commands.
  * `->` When you start a VM, you need to secure it:
    1. Using password.
    2. Using SSH key.

* **1) Using Password:**
  * Set the password using CLI at the time of creating VM.
  * `ssh root@<Public IPv4>`
  * Then put the password.
  * Now you have access to terminal of VM.

* **2) SSH Key:**
  * You get two keys after generating a `ssh-keygen`:
    1. **Public Key:** You can use to verify yourself.
    2. **Private Key:** Stored on local machine.
  * `->` When you give public key, it puts a challenge with your local private key and if it passes, then only a successful authentication happens.

---

## Page 3: SSH Keys, Hacking Concept & AWS EC2 Instance Creation
* **SSH Key Mechanism:**
  * Message + Public Key $ightarrow$ Message decoded (with Private key $ightarrow$ message decoded!)
  * `ssh-keygen` (generates key-pair).

* **Hacking Concept:**
  * To hack someone, write the public key in their computer's SSH file. Now you can ssh into your friend's laptop. Put your public key in friend's `.ssh/authorized_keys` file.

* **Where SSH keys are located :-**
  * Windows: `C:/Windows/system32/drivers/etc/hosts` or `C:/Users/Pankaj` / `C:/Users/Pankaj/.ssh`
  * `->` अगर कोई दूर के system से remotely connected है हो तो उसका Public key दूर के .ssh के अंदर `authorized_keys` वाले file में होगा। (If someone is remotely connected from a distant system, their public key will be inside the remote `.ssh`'s `authorized_keys` file.)

---

## Page 4: Week 2 - Creating VM Instances & Security Groups
* **(1) Creating VM Instances :-**
  * `->` Start a VM instance (AWS EC2).
  * `->` Create/add SSH key-pair.
  * `->` Create and Private-key file automatically downloaded हो जाती है। (A private-key file is automatically downloaded).

* **Security Groups :-**
  * These are virtual firewalls that control inbound (traffic allowed to reach the instance) and outbound (leave the instance) traffic to the EC2 instance.
  * `->` Edit the security groups to add the rules.
  * `->` Start / launch the instance.

---

## Page 5: Connecting to EC2 via SSH & Nginx Introduction
* **Private / Public Key Connection :-**
  * To connect to the EC2 machine from the terminal:
    `ssh -i <Path-to-Pem/PrivateKey> ubuntu@IPv4`

* **Permission Error Check :-**
  * But there will be an error, check $ightarrow$ `ls -l`
  * `->` Your pem file can be read by anyone, which is a vulnerability.
  * `->` So we need to protect it.
  * `->` To protect this run $ightarrow$ `chmod 700 <file-PrivateKey>`

* **Nginx : Reverse Proxies :-**
  * `->` It's an open-source application for reverse-proxying, caching, load balancing, media streaming and more.
  * Web server designed for max performance & stability.

* **HTTPS & Ports :-**
  * HTTPS $ightarrow$ Port No: `443`
    * `https://google.com = https://google.com:443`
    * `↳` HTTPS protocol $ightarrow$ default port is `443`.
    * `↳` To check it, you can inspect in headers for `RemoteAddress`.
  * HTTP $ightarrow$ default port is `80`.
  * **The Problem:** Each computer has only one port for 80 or 443. So if we have 2 projects running on an instance, only one can get the default port.
    * `Sellclothes.com` $ightarrow$ Port `443` $ightarrow$ `https://sellclothes.com` ✔
    * `Sellshoes.com` $ightarrow$ Other Port $ightarrow$ `https://sellshoes.com:<Port>` ❌ (Needs port suffix).

---

## Page 6: Forward Proxy vs. Reverse Proxy & Nginx Routing
* **Proxy (Forward Proxy) vs. Reverse Proxy :-**
  * **Forward Proxy:** Client $ightarrow$ Proxy Server $ightarrow$ Server (internet). `->` It will see the IP of proxy server, not the browser/client.
  * **Reverse Proxy:** Client $ightarrow$ Proxy Server $ightarrow$ Server 1 (`sellbooks.com`) OR Server 2 (`sellclothes.com`). Based on the URL of the request.

* **Nginx also do Reverse Proxying :-**
  * It says: "कि default port में मैं चलूँगी, और जो भी req आएगी उसे इसके url के basis पर respective Process पर transfer करूँगी, ताकि दोनों Process को default port पर access मिल जा सके।" (It says: "I will run on the default port, and whichever request comes, I will transfer it to the respective process based on its URL, so that both processes can get access on the default port.")

---

## Page 7: Implementing Nginx & Configuration
* **Implementing Nginx :-**
  * `->` Install Nginx on VM:
    ```bash
    sudo apt update
    sudo apt install nginx
    ```
    * This will automatically start Nginx on Port 80.
  * `->` Connecting Nginx server to the 2 servers running on Port `8080` & `8081` on VM.
    * We need to change some configuration of Nginx.
    * `->` Go to `/etc/nginx/nginx.conf`
    * `->` Add the config for both process:
      ```nginx
      http {
          server {
              listen 80;
              server_name clothesapp.100xdev.com;
              location / {
                  proxy_pass http://localhost:8080;
              }
          }
          server {
              listen 80;
              server_name booksapp.100xdev.com;
              location / {
                  proxy_pass http://localhost:8081;
              }
          }
      }
      ```

---

## Page 8: Week 15 - PM2 Library & Cluster Mode
* **Week 15**
  * (1) Process management and CI/CD (Sangan)
  * (2) CI, Certificate management & Testing.

* **PM2 Library :-**
  * `->` It's a Node.js npm library.
  * `->` It's a Production Process Manager for Node.js applications with built-in load balancer.
  * `->` It allows you to keep your application alive forever, reload them without downtime.
  * `↳` starting server $ightarrow$ `pm2 start app.js`
  * `↳` installing $ightarrow$ `npm i -g pm2`
  * `↳` list all running tasks/apps $ightarrow$ `pm2 list`
  * `↳` managing app $ightarrow$ `pm2 stop <app-name|id>`, `pm2 restart <...>`, `pm2 delete <...>`
  * `↳` details of an app $ightarrow$ `pm2 describe <id|app-name>`
  * `↳` monitor log $ightarrow$ `pm2 monit`

* **Cluster Mode :-** Node.js load balancing & zero downtime reload.
  * `↳` In cluster mode, when you start an application, it starts multiple process & load balances HTTP/TCP/UDP queries between them.
  * `↳` This increases performance & reliability.

* **Starting a Node.js application in cluster mode :-**
  * `->` It will utilize all CPU available.
  * `->` `pm2 start app.js -i <instances>` (can be `max`)
  * `->` Zero downtime reload $ightarrow$ `pm2 reload all`.

---

## Page 9: PM2 Persistence & CI/CD Fundamentals
* **VM Management with PM2:**
  * `->` Start a new instance.
  * `->` Clone the project & npm i.
  * `->` Install pm2.
  * `->` `pm2 start index.js` $ightarrow$ The process should be running now.
  * Each process has an ID $ightarrow$ called **PID**.
  * You can check your PID at $ightarrow$ `lsof -i :3000`
  * Now kill the process $ightarrow$ kill PID / stop $ightarrow$ `pm2 stop 0` (0 is process index).
  * After killing it $ightarrow$ `pm2 status` $ightarrow$ you will be surprised that the app is still running.

* **Without PM2 vs. With PM2:**
  * When we don't use PM2 & simply use `npm` to run a process (like `node index.js`), if the VM shuts down for maintenance etc., our app won't restart automatically. *(जैसे server सही से काम करना शुरू भी कर दे tab भी)*
  * But if you use PM2 $ightarrow$ even if server goes down, to obviously process off band rahega BUT जैसे ही server काम करना शुरू किया app start हो जाएगी automatically.

* **(2) CI & CD :-**
  * **CI (Continuous Integration):**
    * `->` It's a software development practice, where code changes are automatically integrated into a shared repo multiple times a day.
    * `->` dev commits, automated test passes, testing apps, & finally code is integrated.
    * `↳` It is done to just check, क्या पहनने की functionality break तो नहीं हो रही। (It is done to just check if existing functionality is not breaking.)

---

## Page 10: Continuous Delivery, Continuous Deployment & GitHub Workflows
* **CD $ightarrow$ Continuous Delivery:**
  * Is an extension of CI, where code changes that passes the automated tests are automatically prepared for release to production.

* **Continuous Deployment:**
  * It takes continuous delivery one step further by automating the deployment process entirely.
  * `->` In here, code that passes the tests is immediately and automatically deployed to production environment without manual approval.

* **Some Special files in GitHub :-**
  * **`.github/workflows`**
    * `->` It's a CI file, it means GitHub will run the contents of the files whenever the condition is met.
    * `↳` This file is used for:
      * `->` To run unit/integrated tests.
      * `->` Lint/format checking.
      * `->` To build the application.
      * `->` Deploy it whenever someone pushes their code.

---

## Page 11: Week 25 - Deploying a Turborepo App on AWS
* **Week-25 (Day 2)**
  * **Deploying a Turborepo app on AWS :-**
* **(1) Creating a Turborepo :-**
  * `->` Create a turborepo project.
  * `->` http-server & ws-server in `/apps`.
  * `->` Prisma folder in `/packages`.
  * `->` Initialize (`npm init -y`) in prisma folder.
  * `->` Change the name in `package.json` to `@repo/db`.
  * `->` Remove scripts from `package.json`.
  * `->` Initialize tsconfig in Prisma (`tsc --init`) (do configuration).
  * `->` Install Prisma in Prisma folder (`npx prisma init`).
  * `->` Write model / add DATABASE_URL string.
  * `->` `npx prisma migrate dev`
  * `->` `npx prisma generate`
* `->` Now we need to export this Prisma client so other packages or apps can use it.
  * **To export:**
    * `->` Create a `src` folder inside `/packages/prisma`.
    * `->` `index.ts` $ightarrow$ export const prisma = new PrismaClient();
    * `->` In `package.json`:
      ```json
      "exports": {
          "./client": "./src/index.ts"
      }
      ```

* **(2) Branching strategy:**
  * A company don't have just one branch. Because if auto ci/cd, and some junior developer pushed some buggy code, the whole application could crash.
