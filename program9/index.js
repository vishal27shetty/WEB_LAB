const http = require("http");

const server = http.createServer((req, res) => {
    const path = req.url;
    if (path === '/') {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Hello, Node JS');
    } else if (path === '/about') {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('About us');
    } else if (path === '/contact') {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('Contact us');
    } else {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end('404 Not found');
    }
});

server.listen(3000, () => {
    console.log("Server running at port 3000");
});
