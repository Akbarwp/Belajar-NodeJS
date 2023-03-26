const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

//? Cara Membuat Routing
const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Ini adalah Homepage"
        },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "Ini adalah About"
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak dapat ditemukan';
        },
    },
];

init();


/**
    ** Cara Panggil Server Endpoint
    *TODO: curl -X GET http://localhost:5000/

    *TODO: curl -X POST http://localhost:5000/

    *TODO: curl -X GET http://localhost:5000/test
*/