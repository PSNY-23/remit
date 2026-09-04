# RabbitMQ

① What is RabbitMQ?
② What problem does it solve?
③ What is Exchange and Queue?
④ Producer and Consumer application

It is a message broker (like a post-office).
* Message is sent to the RabbitMQ.
* RabbitMQ stores the message in a queue.
* Worker reads the message from queue & does the job.

**Tip:** frontend doesn't wait for heavy backend job.
* It also retry if job fail once.
* RabbitMQ holds the message (in-memory) on the RabbitMQ server.

**Problem :-**
Server1 -> req -> Server2
* But if Server2 is not ready or busy or there is some error then req/error our app crash.

Server1 -> req -> [ RabbitMQ ] -> Server2
* req stored / queued
* और जब Server2 ready होगा तभी req आगे पास जायेगी।

**Diagram :-**
`Producer` -> `RabbitMQ` -> `Consumer 1` / `Consumer 2`
* data stored in queue is in FIFO.
* Producer send data to RMQ in bit & consumer also receive in bit.

---

# Exchange :-
* message -> task (eg: "send email")
* exchange -> It routes the message.
* queue -> 
* worker -> It picks from queue & do the job.

=> You publish to the exchange (not directly to queue)
=> The exchange uses rules to forward messages to the right queue.

## Types of Exchanges :-

① **Direct Exchange :-**
* Routes message to specific queue by matching a route key.
* `eg: routing_key = "send.email"` -> goes to email queue.

② **Fanout Exchange :-**
* Broadcast to all bound queues (no routing key needed).
* `eg: Notifications`

③ **Topic Exchange :-**
* Like direct exchange, but uses "wildcards".
* `eg: routing_key = "user.*"`
  It means that it can go to many queues like `user.signup` or `user.login`, etc.

④ **Headers Exchange :-**
* Uses message headers instead of routing key (less common).

---

# Installing RMQ using docker
* `docker pull rabbitmq:management`
* `docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management`
* `docker ps` (To see all the containers)
* `docker rm <container id or name>` -> To delete a container
  `docker rm -f <container id or name>`
* `docker container prune` (To delete all stopped containers)
* `docker stop <container>` (Stop the container nicely)
* `docker kill <c>` (No chill just kill)

---

# Making a Producer in nodejs :-
① Make a file called `producer.js`.
```javascript
const amqp = require("amqplib");

const sendMail = async () => {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        const exchange = "mail_exchange";
        const routingKey = "send-mail";
        const message = { to: "abc@gmail.com", from: "abc@us", sub: "-" };

        channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)));
    } catch (error) {}
}
```

**Connection** => It's a like phone call between your node/next application & RabbitMQ server.

**Channel** => Once a connection is established we can create diff channels to send/receive message.
=> A connection can have multiple channels.
`const channel = await connection.createChannel();`

Now with this channel we can perform:
```javascript
channel.assertExchange(exchange, 'direct', { durable: false })
```
* `name of exchange`: `mail_exchange`
* `type of exchange`: `direct`
* `durable: false`: Exchange won't survive if server restarts.

=> `assertExchange` means creating an Exchange, if the exchange already exist with the provided exchange name it wont be created again.

```javascript
channel.assertQueue('mail-queue', { durable: false });
```
↳ make a queue (`mail-queue`)

```javascript
channel.bindQueue('mail-queue', exchange, routingKey)
```
↳ This method binds/unveils the exchange with queue using routing key.

```javascript
channel.publish(exchange, routingKey, Buffer)
```
↳ sends a message to the exchange.

`connection.close()` => gracefully ends connection.

---

=> Now data queue में तो आ जायेगी, We can see from `localhost:15672` पे जाओ,
-> Queues & stream tab
-> get message

=> Now we will consume the message from queues in consumer.
So, make a `consumer.js` file.

```javascript
const amqp = require("amqplib");

const receiveMail = async () => {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        await channel.assertQueue("mail-queue", { durable: false });

        channel.consume("mail-queue", (message) => {
            if (message !== null) {
                console.log(JSON.parse(message.content));
                // ack acknowledge karna jaruri hai
                channel.ack(message);
            }
        });
    } catch (error) {
        console.log("error");
    }
}
```

*An exchange can have multiple queues & each queue will have a single consumer.*

---

# Topic Exchange :-
* It's a type of exchange.
* Direct exchange में हम routing key में कोई भी string डाल सकते हैं, पर जब topic exchange use करेंगे तो routing key में dot (.) होना चाहिए।
  `eg: orders.placed` | `orders.payment` | `orders.X`

* `*` -> matches exactly one word.
  `eg: user.*` -> user.login, user.logout, but not user.login.success.
* `#` -> matches zero or more words.
  `eg: user.#` -> user, user.login, user, user.logout.success

**Imagine a radio with diff stations :-**
* your radio is tuned to -> "music.rock"
* your friend is listening to -> "music.*"
* Another guy -> "music.#"

Now if someone broadcast on diff frequency:
* Broadcast as "music.rock" -> you + friend + guy will hear
* "music.jazz" -> friend + guy
* "music.rock.classic" -> guy

---

# Tips :-
① Create the connection & channel in both the producer side code & consumer side code.

| Operation | Producer | Consumer | Both |
| :--- | :---: | :---: | :---: |
| Connection & channel | ✔ | ✔ | ✔ |
| assertExchange | ✔ | ❌ | ? |
| assertQueue | ? | ✔ | ✔ (Both optional) |
| bindQueue | ❌ | ✔ | ✔ |
| consume | ❌ | ✔ | ✔ |
| publish | ✔ | ❌ | ✔ |

*But consumer में भी connection और channel create करना क्यों जरूरी है?*
क्योंकि consumer में connection नहीं है तो consumer rabbitMQ server से connect होके channel बना कर बता रहा है कि "इस queue से message लेना है, इस queue को connect करो channel से।"
