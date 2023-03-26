const http = require("http");

const requestListener = (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;

    //? Cara set URL
    const { method, url } = request;

    if (url === "/") {

        if (method === "GET") {
            response.end(`<h1>Ini adalah homepage</h1>`);

        } else {
            response.end(`<h1>Tidak ada server method ini</h1>`);
        }

    } else if (url === "/about") {

        if (method === "GET") {
            response.end(`<h1>Halo! Ini adalah halaman about</h1>`);

        } else if (method === "POST") {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });

        } else {
            response.end(`<h1>Tidak ada server method ini</h1>`);
        }

    } else {
        response.end(`<h1>Tidak ada server method ini</h1>`);
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/**
    ** Cara Panggil Server URL
    *TODO: curl -X GET http://localhost:5000/about
    *TODO: curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Ucup\"}"
*/