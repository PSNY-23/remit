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
