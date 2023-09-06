
const server1 = 'http://localhost:3000';
const server2 = 'http://localhost:3030';
const server3 = 'http://localhost:3434';
const servers = [server1, server2, server3];

//Call servers randomly at set intervals to stress them and test
setInterval(() => {
    console.log('running another call');
    const num = Math.floor(Math.random() * 3)
    console.log('making a call to: ' + servers[num]);
    fetch(servers[num]);
}, 1000);
