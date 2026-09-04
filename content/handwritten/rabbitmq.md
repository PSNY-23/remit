# RabbitMQ - Part 2

## Fanout Exchange :-
Imagine you are in a room shouting "Free-Momos!"
-> You don't care who is listening.
-> Anyone in the room who has subscribed hears it.
-> Doesn't matter 1 person / 100 is there.

Fanout just broadcast your message to all queues that are bound to the exchange. (Exchange gets queue & send and any).
-> No need of routing keys.

---

### Producer :-
① Create a connection to RabbitMQ
```javascript
const connection = await amqp.connect("amqp://localhost");
const channel = await connection.createChannel();
```
② Assert Exchange
```javascript
await channel.assertExchange("logs", "fanout", { durable: true });
//                          name      type of exchange
```
③ Assert Queue
```javascript
await channel.assertQueue("console.log", { durable: true });
await channel.assertQueue("Console.log", { durable: true });
// We will define the queue in consumer.
```
④ Publish
```javascript
await channel.publish("logs", "", Buffer.from(message));
//                             |
//                         Exchange empty routing key
```

---

## Consumer / Push Notifications :-

① Make channel & connection
② Assert Exchange
```javascript
await channel.assertExchange("logs", "fanout", { durable: true });
```
③ Make queue :-
```javascript
const queue = await channel.assertQueue("", { exclusive: true });
//                                           ↳ to make this queue temporary
```
↳ "Exclusive" से queue का नाम ऑटोमैटिक generate होता है, लेकिन जैसे ही RabbitMQ connection कटता है queue delete हो जाता है और so no need to manage name.

④ Binding queue to exchange :-
```javascript
await channel.bindQueue(queue.queue, "exchange", "");
//                      ^name of the queue
```

⑤ Consuming :-
```javascript
channel.consume(q.queue, (msg) => {
    if(msg !== null) {
        console.log(msg.msg)
    }
})
```

---

# Priority Queues :-
* It's a special type of queue, where messages are delivered based on the priority level. (1, 10)
* Like First-Come-First-Serve (FCFS).
* It's useful, because some messages are extremely important.
  `eg: Server crashed, etc.`
* So they must have higher priority to get the message & get peed.

**Producer :-**
```javascript
await channel.assertQueue(queueName, {
    durable: true,
    arguments: { 'x-max-priority': 10 }
});

const data = [
    { msg: "Hello low 1", priority: 1 },
    { msg: "Hello low 1", priority: 3 },
    { msg: "Hello mid 2", priority: 5 },
    { msg: "Hello priority 3", priority: 7 }
];

data.map((item) => {
    channel.publish(exchangeName, routingKey, Buffer.from(item.msg), {
        priority: item.priority
    });
})
```

**NOTE! :-** अगर EH consume नहीं कर रहे तो क्या होगा?
Queue में message waiting में रहेंगे और जब RabbitMQ Consumer connect होगा तो पहले फिर वह Priority के basis में consume करेगा।

---

# Delayed Queue :-
* It's like "send message aisi jagah jo baad me aana chahiye".
* `eg: Send reminder notification after 10 min.`
* Retry failed jobs after 30 seconds.
* Rate-limiting/throttling.
* RabbitMQ doesn't support it natively.
  ↳ Hack 1: Using `x-delayed-message` plugin.
  ↳ Hack 2: Dead letter + TTL hack.

### Hack 1: Using `x-delayed-message` plugin
```javascript
await channel.assertExchange("delayed-exchange", "x-delayed-message", {
    durable: true,
    arguments: { "x-delayed-type": "direct" }
});

await channel.publish(
    "delayed-exchange", 
    "sent-dir", 
    Buffer.from(msg), 
    { headers: { "x-delay": 50003 } }
);
```
New queue will get me message after 5 second.

### Hack 2: Using Dead letter + TTL hack
```javascript
await channel.assertQueue("about-queue", {
    arguments: {
        "x-message-ttl": 10000, // 10 sec TTL
        "x-dead-letter-exchange": "", // send to another queue after TTL
        "x-dead-letter-routing-key": "final-queue"
    }
});
```

---

# How to Consume :-
```javascript
await channel.assertQueue("final-queue", { durable: true });
channel.consume("final-queue", (msg) => {});
```

---

# Lazy Queue :-
Normally RabbitMQ keeps messages in RAM (fast).
But lazy queues bees messages on Disk (slow).
* More space
* Less RAM use
* Scalable

**How to declare a lazy queue :-**
```javascript
await channel.assertQueue("big-fat-queue", {
    durable: true,
    arguments: { "x-queue-mode": "lazy" }
});
```

---

# RabbitMQ is smart?
* **Backpressure Handling:** Consumer online है, तो messages RAM में जाएगी।
* If consumer is fast, RAM में है, nothing is routing.
* **In Lazy queue :-**
  ↳ messages are written on disk (from)
  ↳ Barely RAM (uses reference of message from the ROM)
  ↳ Deliver to consumer from disk.

`durable: true` -> message goes to RAM first, also saved on ROM/Disk (so server restarts).
Unacknowledged memory -> If message is consumed, but not ack, lives in RAM.


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
