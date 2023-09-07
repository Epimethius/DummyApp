const express = require('express');
const app = express();
const middleware = require('./middleware.js');

const server1 = 'http://127.0.0.1:3000';
const server3 = 'http://127.0.0.1:3434';
const servers = [server1, server3];

//Call the middleware function, then if successful call another server to switch which one is being tested
app.get('/', middleware.wasteTimeAndSpace, async (req, res) => {
  console.log('made call to server 2');
  try{
    const result = await fetch(servers[Math.floor(Math.random() * 2)]);
    res.status(200).send();
  }
  catch{
    res.status(400).send();
  }
  
})

app.listen(3030);