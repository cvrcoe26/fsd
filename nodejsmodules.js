// create a file index.js and add the following code in it
// run the file using node index.js

const http = require('http');
http.createServer((req, res) => {
  if (req.url === '/') res.end('Welcome to the homepage');
  else if (req.url === '/about') res.end('This is the about page');
  else if (req.url === '/api/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ name: "John", age: 25, city: "Delhi" }));
  }
  else res.end('Not found');
}).listen(3000, () => console.log('Server running'));

// see the output in the browser at http://localhost:3000/   and http://localhost:3000/about
// question b output at http://localhost:3000/api/data


// ques c (os module)
const os = require('os');
console.log('Hostname:', os.hostname());
console.log('Platform:', os.platform());
console.log('Uptime (s):', os.uptime());
console.log('Total Mem (MB):', (os.totalmem() / 1024 / 1024).toFixed(2));
console.log('Free Mem (MB):', (os.freemem() / 1024 / 1024).toFixed(2));
