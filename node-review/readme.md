# Node workshop

In this workshop, we'll build up a NodeJS app from the ground up and check our understanding as we go along.

Remember to preview the `README` first.

## Level 300

Welcome to Node Workshop Level 300.

## Questions

Q1) Define an **API**
Application Programming Interface
A way to access data from another place
An API is a place that we can go to and ask it to bring us something, some information/data, it will go away and bring us back that information without us having to know how it was built or made. i.e. a weather app - we ask the weather api for today's forecast, the API will access the data, we as users don't need to know how to get the weather data ourselves.

Q2) What is the purpose of an **API**
It brings us a lot of data without us having to understand how it gets that data. like the restaurant metaphor, we order food at a restaurant the waiter gets it for us but we don't make it or need to know how to make it. THe kitchen does it and we don't need to know how the kitchen makes it.

Q3) Define an **endpoint**
An endpoint is like a door to your Node.js application. It's a unique address (URL) that clients can knock on to request something from your server. Just like you visit a website by typing its URL in a browser, clients make requests to your server by sending requests to specific endpoints.

Example of an endpoint:

app.get("/home", function(req, res) {
console.log(`welcome`);
})

---

If you're unsure about the questions above, then try starting a discussion with another pair.

## Requirements

We need to set up a **single endpoint**.

For this endpoint, a client application should be able to make a GET request to the "/" endpoint at localhost:9090
and the server should respond with a message "You've successfully reached the server"

Firstly,

Q4) Look inside `app.js`.

On line 12, we need to pass some arguments ( inputs ) to the `server.get` method.
What type of inputs should we pass to the `server.get` method? Use the express documentation to check your answer.

{YOUR_ANSWER_HERE}
