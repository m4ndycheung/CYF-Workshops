const express = require("express");
// loading the express module on line one
console.log("Log 1: ", typeof app);

const server = express();
// initialise a server
console.log("Log 2: ", typeof server);

const port = 9090;

server.get("/", function (request, response) {
  response.send("You've successfully reached the server");
});
// set up a "/" endpoint
