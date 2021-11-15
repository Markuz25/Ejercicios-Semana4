//Dependencias
const express = require('express');
const morgan = require('morgan');
const path = require('path'); //Nos permite trabajar con directorios
//Creamos un servidor
const app = express();

//Configuraciones del servidor
app.set('port',process.env.PORT || 3000); //Configuramos el puerto donde se mostrara
app.set('views', path.join(__dirname, 'views'));//__dirname -> Da la direccion del archivo que lo ejecuta
app.set('view engine','ejs'); //Motor de plantillas para mas funcionalidades en el HTML


//Middlewares -> Funciones que se ejecutan antes de que las rutas procesen algo
app.use(morgan('dev'));//Genera registros

//Rutas
app.use(require('./routes'));

//Archivos estaticos -> Recursos necesarios
app.use(express.static(path.join(__dirname,'public')));


app.listen(3000,()=>{
    console.log("Consola", app.get('port'));
});

