const express = require('express');
const app = express();
const middleware = require('../middleware.js');

const server2 = 'http://localhost:3030';
const server3 = 'http://localhost:3434';
const servers = [server2, server3];

//Call the middleware function, then if successful call another server to switch which one is being tested
app.get('/', middleware.wasteTimeAndSpace, async (req, res) => {
  console.log('made call to server 1');
  try{
    const result = fetch(servers[Math.floor(Math.random() * 2)]);
    res.status(200).send();
  }
  catch{
    res.status(400).send();
  }
  
})

app.listen(3000);