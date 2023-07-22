# Node workshop

In this workshop, we'll build up a NodeJS app from the ground up and check our understanding as we go along.

Remember to Preview this README.

## Level 100

Welcome to Node Workshop Level 100.

Take a look at `package.json`.
And take a look at `app.js`.

## Questions

a) Analyse and then predict what will happen when you run the command `node app.js` inside the `node-review` directory.

Think carefully about the current files and folders you've got in the `node-review` directory.

Predicton: we could see in app.js that const express = require('express'); but when we looked inside the package.json file, we didn't see anything inside the dependencies. when requiring express, we would expect express to be in the dependencies section of the json file. because it's missing, we think there will be an error telling us express is missing from the dependencies.

b) How can you can resolve this problem?
I think we need to install express using npm install express
we typed node app.js and no errors after installing.
