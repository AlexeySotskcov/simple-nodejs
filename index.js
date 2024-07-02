const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html; charset=urf-8",
    });
    const stream = fs.createReadStream('./templates/index.html');
    stream.pipe(res);
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`OUTPUT : http://${HOST}`);
});