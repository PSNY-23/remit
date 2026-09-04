# HTTP: definitive Guide :-

1) `HTTP => internet's multimedia Courier`
(diagram showing `server` and `Browser` with `HTTP`)
`-> ensures your data won't be damaged / scrambled in transit.`

2) `It transfers different kind of data through internet`
`eg: text, images, videos, audios, etc.`
`But it doesn't transfer them as-it-is, it all the data is a different type called MIME -type.`

(diagram: `images, png, mp3, mp4, json -> MIME-type label`)

`MIME: Multipurpose - Internet - Mail- Extension.`

(diagram: `client` <- `data` with `MIME-type` -> `server`)

`eg: Content-type: image/jpeg`
`content-length: 12484`
`MIME-type`

`Read-type` | `text/html` | `text/plain` | `JPEG/PNG/GIF -> image/jpeg png/gif` | `video -> video/quicktime etc`
`HTML ->` (arrow) 

3) `URI vs URL :-`
`http://www.joes-shoes.com/specials/saw-blade.gif`
(arrows pointing out parts)
`http` -> `protocol`
`www.joes-shoes.com` -> `server address`
`/specials/saw-blade.gif` -> `server & address location`

4) `Transaction :-`
(diagram showing client requesting and server responding)
`Request message`
`GET /om/hi-there.txt HTTP/1.0`
`Accept: text/*`
`Accept-Language: en, fr`

`Response message`
`HTTP/1.0 200 OK`
`Content-type: text/plain`
`Content-length: 19`
`Body -> Hi! I'm pinging.`

`Status Line => It says what to do for a req. or what happens for a response.`

`Header => There can be multiple headers in a req/res.`
`=> each header has a name & value.`
`eg:- Content-type: text/plain.`
`next header will come in next line.`

`Body :- Body is optional for both req/res.`

5) `TCP - how HTTP works on TCP.`
`TCP Provides => Error free data transportation`
`=> In-order delivery of data`
`=> Unsegmented data flow`

`Before HTTP can send/receive a req/res. a connection must be established between client & server using IP address & port number.`

`IP-address => Company location`
`Port => Person you want to talk to.`

`eg: http://www.netscape.com (Index.html)`
`↓`
`207.200.83.72 : 80`
`↓`               `↓`
`IP`             `default port`
`↓`
`you get it from DNS`

6) `Architectural components of the web:-`
a) `Proxies -> HTTP intermediaries (client --- Proxies --- server)`
b) `Caches -> store house to keep op (frequent requests)`
c) `Gateways`
d) `Tunnels`
e) `Agents -> eg: browser, web-crawlers, spider etc.`

`Proxy / Caches :`
(diagram of client -> proxy -> server)
`Proxy takes the request on behalf of client.`
`Caches / Proxy :- keeps copies of popular document / resources on proxy server to serve efficiently.`

`Gateway`
(diagram: `{client} -- HTTP --> [Gateway] -- FTP --> [FTP server]`)
`convert HTTP to other protocol.`

`Tunnels :- Tunnels are HTTP application, that are setup after blindy relay data between two connections.`
`HTTP tunnels are used to transport Non-HTTP data over one / more HTTP connections without looking at the data.`
`why Tunnels`
`↳ It lets you expose a local service (web server, api) to internet without firewall/NAT changes.`

`How Tunnels works :-`

`=> Client (inside restricted network) makes outbound HTTP(S) connection to a public tunnel (server/broker).`
`Outbound HTTP(S) are allowed, so connection establishes.`

(diagram: `Client` -> `Public Tunnel server`)

## Chapter 2: URL & URN:

`<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>`
`↓`
`http, smtp, ftp`
`NO URL contain all the parts`

## Chapter 3: HTTP Message.

1) `inbound -> Travel of message from client to server`
`=> message go inside server`
`outbound => message comes out of server`

2) `List of HTTP headers :-`

`Headers:-`
`Headers are method work together to determine what client and server do.`

`Header falls under 5 classes:-`
i) `General Headers :- Used by both client & server for general purpose.` `eg: date`
ii) `Request headers => Used by request message`
`↳ Provides extra info to server`
iii) `Response headers => Provides extra info to client is expecting.`
`eg: type of data client is expecting.` `Accept: */* (accept all types)`
iv) `Entity headers` `↳ Used by Response message`
`↳ Provides extra information to client.`
`eg: Server: Tiki-Hut/1.0.0` `(Client is talking to v1.0 of Tiki-Hut server)`

v) `Extension headers.`
`↳ Headers that deals with entity body.`
`Content-type: text/html; charset=iso-latin-1`
`(means data is an HTML doc int in iso-latin-1 character)`
`Extension headers => It's non-standard header that have been created by application developers but not yet added to the sanctioned HTTP specification.`

1) `General Headers :-`
`↳ Used by both client & server for general information`
`↳ eg: connection: GET, POST, etc.`
`Date: When message was created.`
`MIME: version`
`Trailer, Transfer-encoding, Upgrade, Via`

`General Caching headers :-`
`Cache-control: Used to pass caching directives along with message.`
`Pragma: Another way to pass caching directiv.`

2) `Request Header :-`
`↳ Works only in Request message.`
`↳ gives info about who/what is sending request.`

`↳ eg:-`
`Client-IP : Machine on which client is running.`
`FROM : Email address of client user.`
`HOST : (Hostname + Port) of server where request is being sent.`
`Referer : Provides URL of the document, that contains current request URI.`
`UA-Color : Info about color capabilities of client's display.`
`- CPU/Disp / OS/pixels : all about client machine.`

`User-Agent : Name of application making the request.`

`Accept-header :-`
`It gives client a way to tell server their preference capabilities/what they want.`
`Accept : Types of media that client is expecting/will receive/be accepted.`
`Accept-charset : what charset will be accepted.`
`Accept-encoding : `
`Accept-language :`
`TE : Transfer encoding.`

`Conditional - request - header :-`
`Sometimes, client want to put some restrictions on a request.`
`example: if client already have a copy of document, it might want to ask server to send the document again iff the document has some updates.`
`Expect : Allows a client to list server behavior that it requires for a request.`

`if-Match:`
`if-Modified-Since`
`if-None-Match`
`if-Range`
`if-Unmodified-Since`
`Range`

`Request-Security Header :-`
`Authorization : contains data, that client is supplying to the server to authenticate itself.`
`Cookie : used by client to pass a token to the server.`
`Cookie2 : notes a version of cookie.`

`Proxy-request-header :-`
`Max-Forwards : max no. of times a request should be forwarded to another proxy or gateway on its way to the origin server.`
`Proxy-Authorization : Same as Authorization, but used when authenticating with proxy.`
`Proxy-Connection : same as connection with a proxy.`

3) `Response - Header :-`
`Age : how old is response.`
`Public : A list of request methods, server supports for its resources.`
`Retry-after : a date/time to try back if resource is unavailable.`
`Server : Name & version of server OS.`
`Title : HTML document's title.`
`Warning : `

`Negotiation header :-`
`It provides about server the ability to negotiate for a resource if multiple representation are available.`

`Accept-Ranges : `
`Vary`
`Response-Security Header`
`Proxy-Authenticate : `
`Set-Cookie : `
`Set-Cookie2`
`WWW-Authenticate : `

4) `Entity header :-`
`↳ It is used to describe payload of HTTP message.`
`↳ payload can be in both request & response.`

`Allow : List of req. methods that can be performed on this entity.`
`Location : `

`Content-header :`
`Content-Base : Base URL for resolving relative URL.`
`Content-Encoding : Encoding that was performed on the body.`
`Content-Language : `
`Content-Length : `
`Content-Location : `
`Content-MD5 : `
`Content-Range : `
`Content-Type : `

`Entity-Caching :-`
`How & when to cache.`
`ETag : entity tag associated with this entity.`
`Expires : `
`Last-Modified : `

## Chapter 4 : Connection Management :-
`HTTP Connection are nothing more than`
`HTTP = (TCP + Some Rules)`
`↳ gives reliable bit pipes`

`=> TCP streams are segmented and shipped by packets. IP.`

`=> Diff in HTTP vs HTTPS`

(Diagram for HTTP)
`HTTP` -> `Application layer`
`TCP` -> `Transport layer`
`IP` -> `Network layer`
`Network Interface` -> `Data link layer`

(Diagram for HTTPS)
`HTTP`
`TLS/SSL` `-> security layer`
`TCP`
`IP`
`Network Interface`
