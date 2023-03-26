const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route({
        method: 'POST',
        path: '/user',
        handler: (request, h) => {
            //? Cara Membuat Response Baru
            return h.response('created').code(201);
        },
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

// Detailed notation
const handlerDetailed = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
    return response;
};

// Chained notation
const handlerChained = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('X-Custom', 'some-value');
};

init();

/**
    ** Cara Panggil Server Endpoint
    *TODO: curl -X POST http://localhost:5000/user
*/