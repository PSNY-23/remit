# Peerjs

(1) When using Peerjs, it automatically provides signaling server to find the diff. clients

```javascript
Peer = new Peer(null, {debug: 3});
```
* `↳` This line of code automatically make a peer object that contains id of the client & other metadata
* `↳` It automatically connects to the signalling server

```javascript
peer.on('open', (id) => { })
```
* `↳` एक बार signaling server से connection हो गया तो, उसे ही बोलते है peer open हो गया so, this event will be triggered.
* `eg:` अब हम ये (`peer.id`) किसी ओर के साथ share कर सकते हैं, जिससे कोई भी हमसे connect हो सकता है.

```javascript
peer.on('connection', (c) => { })
```
* `↳` अब अगर उस id से कोई connect करेगा और peer-peer connection establish होगा
* `↳` eg. `peer.connect(id)`
* `↳` `c.peer` will give you peer connected to that connection
* `↳` `c.on("data", (data) => { })`
  * `↳` this is how you will get data sent from peers of this connection
* `c.send() =>` to send.
