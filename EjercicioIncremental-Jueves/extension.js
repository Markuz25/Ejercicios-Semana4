const http = require('http');
let arrayCursos = ['Curso Python', 'Curso C++', 'Curso JS', 'Curso C'];

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Listado de cursos</h1>`); 
    arrayCursos.forEach((element,index) => {
        res.write(`<li>${index}:${element}</li>`);
    })
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




