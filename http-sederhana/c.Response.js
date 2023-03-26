const http = require("http");

const requestListener = (request, response) => {
    response.setHeader("Content-Type", "text/html");

    const { method, url } = request;
    if (url === "/") {

        if (method === "GET") {
            //? Cara set Response HTTP
            response.statusCode = 200;

            //? Cara set Response Body

            response.write('<html>');
            response.write('<body>');
            response.write('<h1>Hello, World!</h1>');
            response.write('</body>');
            response.write('</html>');

            response.end(JSON.stringify({
                message: `Ini adalah homepage`,
            }));

        } else {
            response.statusCode = 404;
            response.end(JSON.stringify({
                message: `Tidak ada server method ini! ${method}`,
            }));
        }

    } else if (url === "/about") {

        if (method === "GET") {
            response.statusCode = 200;
            response.end(`<h1>Halo! Ini adalah halaman about</h1>`);

        } else if (method === "POST") {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });

        } else {
            response.statusCode = 404;
            response.end(JSON.stringify({
                message: `Tidak ada server method ini! ${method}`,
            }));
        }

    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: `Tidak ada server URL ini! ${url}`,
        }));
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

/**
    ** Cara Panggil Server Response HTTP
    *TODO: curl -X GET http://localhost:5000/

    *TODO: curl -X GET http://localhost:5000/about

    *TODO: curl -X DELETE http://localhost:5000/
*/