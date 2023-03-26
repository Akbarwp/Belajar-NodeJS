const http = require("http");
const { abort } = require("process");

const requestListener = (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;

    //? Cara set method
    const {method} = request;
    if (method === "GET") {
        response.end(`<h1>Halo HTTP Server! ${method}</h1>`);

    } else if (method === "POST") {
        //? Cara set body request
        let body = [];
    
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            response.end(`<h1>Hai, ${body}!</h1>`);
        });
        
    } else if (method === "PUT") {
        response.end(`<h1>Halo HTTP Server! ${method}</h1>`);

    } else if (method === "DELETE") {
        response.end(`<h1>Halo HTTP Server! ${method}</h1>`);

    } else {
        response.end(`<h1>Ini bukan method! ${method}</h1>`);
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/**
    ** Cara Panggil Server Endpoint
    *TODO: "curl -X {method} http://localhost:5000" 
    *@param {method}: GET, POST, PUT, DELETE

    ** Cara Panggil Server Body Request
    *TODO: curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Ucup\"}"
*/