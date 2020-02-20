# NodeJS software engineer job offer exercise

## Exercise

The goal of the exercise is to develop a NPM module that is able to insert a
custom HTTP header in a Node server.

When running this NodeJS HTTP server [1], the following occurs:

    $ curl -I http://<my-host>:8888/
    HTTP/1.1 200 OK
    Date: Wed, 13 Apr 2016 22:08:19 GMT
    Connection: keep-alive

We would like to make it return one additional header:

    $ curl -I http://<my-docker-host>:8888/
    HTTP/1.1 200 OK
    [...]
    X-Instrumented-By: Sqreen

The module has to hook the Node HTTP API, *without calling it*.
Only the Sqreen module can be required and initialized.

## Result

Please provide us an NPM module that will perform the instrumentation, once required in the HTTP server code.

## This is an exercise

The code you will produce is part of our technical interview process. You obviously own full property on everything you produce.


[1] A simple Node HTTP server:

    var http = require('http');

    function handleRequest(request, response) {
       response.end('Hello, world!');
    }

    var server = http.createServer(handleRequest);

    server.listen(8888);

