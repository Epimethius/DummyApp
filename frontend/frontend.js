const axios = require('axios');
const server1 = 'http://127.0.0.1:3000';
const server2 = 'http://127.0.0.1:3030';
const server3 = 'http://127.0.0.1:3434';
const servers = [server1, server2, server3];


//Call servers randomly at set intervals to stress them and test
setInterval(async () => {
    //console.log('running another call');
    const num = Math.floor(Math.random() * 3);
    console.log('making a call to: ' + servers[num]);
    try{
      const result = await axios.get(servers[0]);
    }
    catch (error){
      console.log('failed with error: ', error);
    }
}, 1000);
