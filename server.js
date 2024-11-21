const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'cpntent-Type': 'text/html' });
    res.end('<h1>asslema Node!!!<h1>\n');
});

server.listen(3000, ()  => {
console.log('server ye5dm 3la http://localhost:3000/');
});