const http = require("http");

const port = 8000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.headersSent("Content-Type", "text/plain");
  response.end("Hello World\n");

});

server.listen(port, () => {
  console.log(`Server running at http"//host:${port}/`)
})