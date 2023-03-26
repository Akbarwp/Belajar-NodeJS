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

const routes = [
    {
        method: "GET",
        
        //? Cara Membuat Path Parameter
        path: "/user/{username?}",
        handler: (request, h) => {

            //? Cara membuat default value && mengambil request
            const { username = "User" } = request.params;
            return `Hello ${username}, ohayou gozaimasu`;
        },
    },
    {
        method: "GET",
        path: "/lokasi",
        handler: (request, h) => {

            //? Cara Membuat Query Parameter
            const { kota, negara } = request.query;
            return `Berada di ${kota}, ${negara}`;
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
    }
];

init();

/**
    ** Cara Panggil Server Endpoint
    *TODO: curl -X GET http://localhost:5000/user/Ucup

    *TODO: curl -X GET http://localhost:5000/lokasi?kota=Sidoarjo&negara=Indonesia
*/