# HTTP: Definitive Guide :-

## Page 1
* (1) HTTP => internet's multimedia courier
  * *(Diagram: [sender] --http--> [Browser])*
  * HTTP ensures your data won't be damaged/scrambled in transit.

* (2) It transfers different kind of data through internet
  * eg: text, images, videos, audios etc.
  * But it doesn't transfer them as '0's & '1's. It call the data in a different type called MIME-type :-
  * *(Diagram: Cloud containing "images, png, mp3, mp4, json" pointing to "MIME-type label")*

* MIME : Multipurpose-Internet-Mail-Extension.
  * *(Diagram: [Client] <--- data <--- [Server]. Above data is written "MIME-type")*
  * eg: `Content-type: image/jpeg`
        `Content-length: 12984`
        `MIME-type`

* Real type vs MIME-type
  * HTML -> `text/html`
  * text -> `text/plain`
  * JPEG/PNG/GIF -> `image/jpeg` / `png` / `gif`
  * Video -> `video/quicktime` etc.

* (3) URI vs URL :-
  * `http://www.joes-shoes.com/specials/saw-blade.gif`
  * `http://` -> Protocol
  * `www.joes-shoes.com` -> server address
  * `/specials/saw-blade.gif` -> server's address location

---

## Page 2
* (4) Transaction :-
  * **Request Message**
    ```http
    GET /text/hi-there.txt HTTP/1.0
    Accept: text/*
    Accept-Language: en, fr
    ```
  * **Response Message**
    ```http
    HTTP/1.0 200 OK
    Content-type: text/plain
    Content-length: 19

    Hi! I'm Pankaj
    ```

* **Start Line =>** It says what to do for a req. or what happens for a response.
* **Header =>** There can be multiple headers in a req/res.
  * => each header has a name & value.
  * eg: `Content-type: text/plain`.
  * next header will come in next line.
* **Body :-** body is optional in both req/res.

* (5) TCP :- how HTTP works on TCP.
  * TCP provides => Error free data transportation
  * => In-order delivery of data
  * => Unsegmented data stream

  * Before HTTP can send/receive a req/res. a connection must be established between client & server using IP address & Port number.
  * IP-address => Company location.
  * Port => Person you want to talk to.

  * eg: `http://www.netscape.com/index.html`
    * `www.netscape.com` -> `207.200.83.71` (IP, you get it from DNS)
    * Port default is `80`

---

## Page 3
* (6) Architectural components of the web :-
  * (a) Proxies -> HTTP intermediaries *(Diagram: Client -> Proxy -> Server)*
  * (b) Caches -> storehouse to keep up
  * (c) Gateways.
  * (d) Tunnels.
  * (e) Agents -> eg: browser, web-crawlers, spider even.

* **Proxy Server :-**
  * *(Diagram: [Client] <---> [Proxy] <---> [Server])*
  * Proxy talks to server on behalf of client.

* **Caches proxy :-** Keep copies of popular document/resources on proxy server to serve efficiently.

* **Gateway**
  * *(Diagram: [Client] <--HTTP--> [HTTP/FTP Gateway] <--FTP--> [FTP Server])*
  * converts HTTP to other protocol.

* **Tunnels :-** Tunnels are HTTP application, that are setup after, blindly relay data between two connections.
  * HTTP tunnels are used to transport non-HTTP data over one/more HTTP connections without looking at the data.
  * **Why Tunnels**
    * -> It lets you expose a local service (web server, api) to internet without firewall/NAT changes.

---

## Page 4
* **How Tunnels works :-**
  * => Client (inside restricted network) makes outbound HTTP(S) connection to a public tunnel (server/broker). Outbound HTTP(S) are allowed, so connection established.
  * *(Diagram: [Client] ----> [Public Tunnel Server])*

* **Chapter 2: URL & URN:**
  * `<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>`
  * scheme -> http, smtp, ftp
  * no URL contain all the parts.

* **Chapter 3: HTTP message**
  * (1) Inbound => Travel of message from client to server
    * => Message go inside server
  * Outbound => message comes out of server
  * (2) list of HTTP headers :-

---

## Page 5
* **Headers :-**
  * Headers are method work together to determine what clients and server do.
  * Header falls under 5 classes :-
    * (i) General headers :- Used by both client & server for general purpose. eg: date
    * (ii) Request headers -> used by request message. Provides extra info to server. eg: type of data client is expecting. `Accept: */*` (accept all types)
    * (iii) Response headers -> used by Response message. Provides extra information to client. eg: `Server: Tiki-Hut/1.0` (Client is talking to V1.0 of Tiki-Hut server)
    * (iv) Entity headers -> Headers that deals with entity body. `Content-type: text/html; charset=iso-latin-1` (means data is an HTML document in iso-latin-1 character)
    * (v) Extension headers -> It's non-standard headers that have been created by application-developer but not yet added to the sanctioned HTTP specification.

* (1) General Headers :-
  * -> Used by both client & server for general information
  * -> eg: `Connection: GET, POST, etc.`
    * `Date`: When message was created.
    * `MIME-Version`:
    * `Trailer`, `Transfer-encoding`, `Upgrade`, `Via`.

* General caching headers :-
  * `Cache-control`: Used to pass caching direction/order along with message.
  * `Pragma`: Another way to pass caching directiv

---

## Page 6
* (2) Request Headers :-
  * -> Works only in Request message.
  * -> gives info about who/what is sending request
  * -> eg :-
    * `Client-IP`: Machine on which client is running.
    * `FROM`: Email address of client user.
    * `HOST`: (Hostname + Port) of server where request is being sent.
    * `Referer`: Provider URL of the document, that contains current request URI.
    * `UA-Color`: info about color capabilities of client's display.
    * `- CPU/Disp/OS/pixels`: all about client's machine.
    * `User-Agent`: Name of application making the request.

* Accept-headers :-
  * It gives client a way to tell server their preference capabilities / what they want.
  * `Accept`: Types of media that client is expecting/will receive.
  * `Accept-charset`: what charset will be accepted.
  * `Accept-encoding`:
  * `Accept-language`:
  * `TE`: Transfer encoding.

* Conditional request headers :-
  * Sometimes, clients want to put some restrictions on a request.
  * example: if client already have a copy of document, it might want to ask server to send the document again if the document has some updates.
  * `Expect`: Allows a client to list server behavior that it requires for a request.
  * `If-Match`:
  * `If-Modified-Since`:
  * `If-None-Match`:
  * `If-Range`:
  * `If-Unmodified-Since`:
  * `Range`:

---

## Page 7
* Request-Security headers :-
  * `Authorization`: contains data, the client is supplying to the server to authenticate itself.
  * `Cookie`: Used by client to pass a token to the server.
  * `Cookie2`: notes a version of cookie.

* Proxy-request-headers :-
  * `Max-Forwards`: Max no. of times a request should be forwarded to another Proxy or gateway on its way to the origin server.
  * `Proxy-Authorization`: Same as Authorization, but used when authenticating with proxy.
  * `Proxy-Connection`: Same as connection but with a Proxy.

* (3) Response-Headers :-
  * `Age`: how old is response.
  * `Public`: A list of request method, server supports for its resources.
  * `Retry-After`: a date/time to try back, if resource is unavailable.
  * `Server`: Name & version of server OS.
  * `Title`: HTML document's title.
  * `Warning`:

* Negotiation headers :-
  * It provides client/server the ability to negotiate for a resource if multiple representation are available.
  * `Accept-Ranges`:
  * `Vary`:

* Response-Security headers
  * `Proxy-Authenticate`:
  * `Set-Cookie`:
  * `Set-Cookie2`:
  * `WWW-Authenticate`:

---

## Page 8
* (4) Entity headers :-
  * -> It is used to describe payload of HTTP message.
  * -> payload can be in both request/Response.
  * `Allow`: list of req. methods that can be performed on this entity.
  * `Location`:

* Content headers :-
  * `Content-Base`: base URL for resolving relative URL.
  * `Content-Encoding`: Encoding that was performed on the body.
  * `Content-Language`:
  * `Content-Length`:
  * `Content-Location`:
  * `Content-MD5`:
  * `Content-Range`:
  * `Content-Type`:

* Entity-caching :-
  * How & when to cache
  * `ETag`: entity tag associated with this entity.
  * `Expires`:
  * `Last-Modified`:

---

## Page 9
* Chapter 4: Connection Management :-
  * HTTP connection are nothing more than
  * `HTTP = (TCP + some Rules)`
    * -> gives reliable bit pipes
  * => TCP streams are segmented and shipped by packets. IP.

* => Diff in HTTP vs HTTPS
  * **HTTP Stack:**
    * `[ HTTP ]` -> Application layer
    * `[ TCP ]` -> Transport layer
    * `[ IP ]` -> Network layer
    * `[ Network Interface ]` -> Data link layer
  
  * **HTTPS Stack:**
    * `[ HTTP ]`
    * `[ TLS/SSL ]` -> Security layer
    * `[ TCP ]`
    * `[ IP ]`
    * `[ Network Interface ]`
