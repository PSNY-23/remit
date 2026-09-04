# Complete WebRTC Notes

## Page 1: Introduction to WebRTC & MediaDevices
* **What is WebRTC :-**
  * `navigator.mediaDevices` $ightarrow$ Camera, Micro, Screen.
  * `RTCPeerConnection` $ightarrow$ Peer-to-peer connection to stream media.

* **NOTE:** If we can stream everything via WebSockets, why do we even need WebRTC?
  * **WebSocket $ightarrow$ TCP based** (a slow + reliable)
  * **WebRTC $ightarrow$ UDP based** (fast + unreliable)

* **MediaDevices :-** `navigator.mediaDevices`
  * **eg:**
    ```typescript
    const devices = await navigator.mediaDevices.enumerateDevices();
    ```
    * `↳` List of all available devices.

* **navigator.mediaDevices.getUserMedia() :-** This is fn you call to ask user to access their devices.
  * **eg:**
    ```typescript
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    });
    ```
  * `↳` This is a `MediaStream` object.
  * **Stream is actually an instance of MediaStream.**
  * This can hold multiple tracks like stream of audio, video etc.
  * `MediaStream :-`
    * `active: true`
    * `id: "some-id"`
    * `getTracks(): [MediaStreamTrack (audio), MediaStreamTrack (video)]`

---

## Page 2: Showing Video in Browser & MediaStream Recording API
* **How to Show Video in Browser :-**
  * Once you have a stream, you can show it in a `<video>` tag like this:
  ```html
  <video id="my-video" autoplay playsinline muted></video>
  ```
  ```javascript
  document.getElementById("my-video").srcObject = stream;
  ```

* **Next.JS :-**
  ```tsx
  <video ref={videoRef} autoplay playsinline muted />
  ```
  ```typescript
  const videoRef = useRef(null);
  const stream = await navigator.mediaDevices.getUserMedia(...);
  videoRef.current.srcObject = stream;
  ```

* **To mute audio:** `audioTrack.enabled = false`
  * `const audioTrack = stream.getAudioTracks();`
  * `const videoTrack = stream.getVideoTracks();`

* **MediaStream Recording API :-**
  * It allows you to record media streams, such as audio/video camera/screen directly in the browser.
  * `MediaRecorder` $ightarrow$ The main object used to record.
  * `MediaStream = Stream of audio/video (from getUserMedia or getDisplayMedia).`

---

## Page 3: Recording Streams and Blobs
* **Example Code:**
  ```typescript
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  const mediaRecorder = new MediaRecorder(stream);

  let chunks = [];
  mediaRecorder.start();

  mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = "recording.webm";
      a.click();
  };
  ```

---

## Page 4: Peer-to-Peer Connection & Terminology
* **Peer-to-Peer connection :-**
  * **Signaling:** (1) Find each other (browser) $ightarrow$ (2) Exchange info to make connection $ightarrow$ (3) JSON data / ICE candidates.

* **Some Terminology :-**
  * **MediaStream:** Captures camera/mic data using `getUserMedia()`.
  * **RTCPeerConnection:** Core WebRTC object to handle P2P connection.
  * **SDP (Session Description Protocol):** Describes media capabilities (codecs, IP, Port).
  * **ICE (Interactive Connectivity Establishment):** Handles network traversal.
  * **STUN/TURN Servers:** Helps peer find and connect to each other through NAT/Firewalls.

* **Workflow :-**
  1. Each peer capture from media using `Stream = navigator.mediaDevices.getUserMedia(...)`.
  2. Create RTCPeerConnection :-
     * Each peer create an instance:
     ```typescript
     const peer = new RTCPeerConnection({ iceServers: [{ urls: "stun:..." }] });
     ```

---

## Page 5: Signaling, SDP, ICE Candidates & STUN/TURN
* **Signaling :-**
  * WebRTC has no built-in signaling, that's why you can use WebSocket, Socket.io, Firebase etc. to exchange $ightarrow$ SDP offers & answers, ICE candidates.

* **SDP :-**
  * Describes session capabilities (codecs, streams, etc.)
  * Sent as: **Offer** (created with `peer.createOffer()`) / **Answer** (created with `peer.createAnswer()`).
  * These are exchanged via signaling server.

* **ICE Candidates :-**
  * ICE handles *how* peer find the best path (IP/Port) to connect.
  * `peer.onicecandidate = (e) => { signaling.send(e.candidate); }`
  * Peer, and add `IceCandidate(candidate)` to add it to peer.

* **STUN and TURN servers :-**
  * `Session Traversal Utilities for NAT` $ightarrow$ discover public IP.

---

## Page 6: SDP Exchange & NAT Traversal Workflow
* **Diagram & Explanation:**
  * SDP is an object containing info about session connection (eg: codecs, address, media type, audio/video etc).
  * **ICE Candidate:** It's a public IP address & port that could potentially be an address that receives data.
  * **Problem:** Most devices are behind Firewalls & NAT devices.

---

## Page 7: Step-by-Step WebRTC Connection Workflow
1. **Signaling Server:** Not a part of WebRTC. Like a matchmaker, helps client meet but leaves room alone once they connect. Typically via WebSocket, HTTP, Socket.io.
2. **Browser 1 creates peer connection:**
   ```typescript
   const pc = new RTCPeerConnection(config); // includes STUN/TURN servers.
   pc.addTrack(localStream.getTracks()[0], localStream);
   ```
3. **Browser 1 creates offer (SDP):**
   ```typescript
   const offer = await pc.createOffer();
   await pc.setLocalDescription(offer);
   // Browser 1 sends the offer to Browser 2 via signaling server.
   ```
4. **Browser 2 receives offer & creates answer:**
   ```typescript
   await pc.setRemoteDescription(offer); // Receives offer
   const answer = await pc.createAnswer();
   await pc.setLocalDescription(answer);
   ```

---

## Page 8: STUN & TURN Servers Deep Dive
* **STUN (Session Traversal Utilities for NAT):**
  * **Purpose:** Helps a device behind NAT discover its public IP address and port as seen by the outside world.
  * **Usages:** STUN servers are used to find a way to establish P2P connection.
  * **Limitation:** Doesn't work in restrictive NAT/Firewall environments.

* **TURN (Traversal Using Relays around NAT):**
  * If STUN is a server who creates hops and who reg.
  * `->` Client requests the STUN server via websocket.
  * `->` That STUN server receives req. from client/browser.
  * `->` It looks at the public IP address of the incoming request.
  * `->` Now the stun server sends these IP + Port to the done client.

* **NOTE:** You don't need to create STUN servers, public STUN servers are already available for free!
  * **eg:** `google $ightarrow$ STUN server url` (`stun:l.google.com:19302`)
  ```typescript
  const peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: "stun:l.google.com:19302" }]
  });
  ```

---

## Page 9: WebRTC Signaling Workflow with Rooms
* **Workflow :-**
  1. Two clients/browsers visit your application, and your application is setup in a way that a websocket connection is established between server & both browsers.
  2. Let's say **Client 1** sent a message of a new client 2 to connect.
     * `->` Client 1 creates a room.
     * `->` Sends a message to the server to create a room.
     * `->` Server keeps a track of which users are in which room.
  3. **Client 1** shares the link with **Client 2**.
     * `->` Client 2 joins for the url $ightarrow$ Server gives a shareable link, by which anyone can join that specific room.
