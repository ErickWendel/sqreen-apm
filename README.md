# NodeJS software engineer job offer exercise

This module is an instrumentation program responsible for add a custom Sqreen HTTP Header for all your requests.

## Getting started

1. Install node. The agent runs on v10 and higher. Development work on this module is done with the latest stable release of Node.
2. Install this module via `npm install sqreen-agent` for the application you want to monitor.
3. Add `require('sqreen-agent').start()` as the first line of the app's main module

## Examples

```js
require('sqreen-agent').start()
var http = require('http');

function handleRequest(request, response) {
   response.end('Hello, world!');
}

var server = http.createServer(handleRequest);

server.listen(8888);
```

```bash
curl -I http://localhost:8888/
```

```bash
HTTP/1.1 200 OK
X-Instrumented-By: Sqreen
Date: Thu, 20 Feb 2020 02:53:2
2 GMT
Connection: keep-alive
Content-Length: 13
```
