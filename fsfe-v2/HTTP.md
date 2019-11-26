# HTTP

HTTP invented in 1998

hypertext transport protocol
http works on top of TCP
browser knows how to response

request =>
<= response

## HTTP headers

What is a header?

- packets of data and packets of metadata
- has a lot of data
- I can attach nginx header and cut it
- along the way we can add a data and substract a data

### Request

GET / HTTP/1.1 (request type, path, protocol)
Host: collaba.dev
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.38093.132
Safari/537.36
Accept: text/html
Accept-Encoding: gzip, br
Accept-Language: en,en-US

### Response

HTTP/1.1 200 OK (protocol status code)
Server: nginx/1.14.0 (Ubuntu)
Date: Wed, 25 Sep 2019 02:13:13 GMT

Success

- 200 OK
- 201 Created (POST)
- 204 No Content

Redirection

- 301 permanent
- 304 Not Modified
- 307 temporary redirect

Client Error

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 409 Conflict

Server Error

- 500 Internal Server Error
- 503 Service Unavailable
- 504 Gateway Timeout

## Cookie

- persistent text data
- session cookie
- regular cookies - persists over time (expire on...)
- persist and send on every request (unless it expires)
- extend the user experience across different sessions
- the web is stateless
- logged in/out, accepted cookies

Tip: careful on cookie size. because it is sent on every request

X-Header (custom header) - custom header (browser/nginx doesn't not about that)

## Headers

## Status codes

## HTTPS (SSL)

- http unencrypted (anyone could hook into the network and listen what data you send to server)
- https - is the must, all the data is encrypted
- https - the person you talking to is really the one
- https - encrypted on client and uncrypted on the server
  - client has a key
  - use public certificate to encrypt
  - SSL slows down the system (based on key length)
- handshake

## Certbot

[certbot](https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx)

- redirect 80 http = to 443 https

## HTTP/2

ssl encryption turns off when http2 is on
still runs over TCP

- multiplexing
- hpack

## HTTP/3

runs over UDP
