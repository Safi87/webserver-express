const http = require('http');

http.createServer((rq, rs) => {

        rs.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Xavi',
            edad: 33,
            url: rq.url
        }
        rs.write(JSON.stringify(salida));
        //rs.write('Hola mundo');
        rs.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');