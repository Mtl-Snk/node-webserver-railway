const http = require('http');



http.createServer( (req, res) => {

    console.log(req);

    res.setHeader('Content-Dispotition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv'});


    res.write('id, nombre' );
    res.write('1, fernando' );
    res.write('2, maria' );
    res.write('3, juan' );
    res.write('3, pedro' );
    res.end();
})
.listen( 8080 );

console.log('escuchando el puerto', 8080);