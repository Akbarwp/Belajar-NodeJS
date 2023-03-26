const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    //? Cara Membuat Payload Request
    server.route({
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        },
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();

/**
    ** Cara Panggil Server Endpoint
    *TODO: curl -X POST http://localhost:5000/login
*/