const express = require('express');
const app = express();
const middleware = require('../middleware.js');

const server1 = 'http://localhost:3000';
const server2 = 'http://localhost:3030';
const servers = [server1, server2];

//Call the middleware function, then if successful call another server to switch which one is being tested
app.get('/', middleware.wasteTimeAndSpace, async (req, res) => {
  console.log('made call to server 3');  
  try{
    const result = fetch(servers[Math.floor(Math.random() * 2)]);
    res.status(200).send();
  }
  catch{
    res.status(400).send();
  }
  
})

app.listen(3434);