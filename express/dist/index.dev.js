"use strict";

var http = require("http");

var port = 8000;
var server = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello world\n gyrgr");
});
server.listen(port, function () {
  console.log("Server running at http\"//host:".concat(port, "/"));
});