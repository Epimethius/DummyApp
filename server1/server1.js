const express = require('express');
const app = express();
const middleware = require('./middleware.js');
const cors = require('cors');

const server2 = 'http://127.0.0.1:3030';
const server3 = 'http://127.0.0.1:3434';
const servers = [server2, server3];

app.use(cors());

//Call the middleware function, then if successful call another server to switch which one is being tested
app.get('/', (req, res, next) => {console.log('called server1'); return next()}, middleware.wasteTimeAndSpace, async (req, res) => {
  try{
    const result = await fetch(servers[Math.floor(Math.random() * 2)]); //evaluates to 0 or 1 and selects either server 2 or 3
    res.status(200).send();
  }
  catch{
    res.status(400).send();
  }
  
})

app.listen(3000);