require('./sqreen').start()

var Http = require('http');

function handleRequest(request, response) {
  response.end('Hello, world!');
}

var server = Http.createServer(handleRequest);

server.listen(8888);

