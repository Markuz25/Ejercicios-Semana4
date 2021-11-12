const express = require('express');
const moment = require('moment');
const coolImages = require('cool-images');
const router = express.Router(); //Permite trabajar diferentes rutas

router.get('/', (req, res) => {
    res.render('index', datos); //Reenderiza el archivo
});

//No se ocupa por el momento
router.get('/perfil', (req, res) => {
    res.render('perfil');
});

//Obtenemos la fecha correspondiente
let utc = moment.utc();
console.log("LA HORA EN UTC ES:", utc.format('DD-MM-YYYY hh:mm:ss A'));

let local = moment().locale('mx');
console.log("LA HORA LOCAL ES: ", local.format('DD-MM-YYYY hh:mm:ss A'))

let duration = moment(utc.diff(local));
let texto='';

console.log('Horas de diferencia:  ' + duration.hours());

if (moment(local).isBefore(utc)) {
    texto = 'La fecha local es mayor que la fecha UTC';
}
else {
    texto ='La fecha UTC es mayor que la fecha local';
}
let datos = {
    imagenSrc: coolImages.one(),
    utc:utc,
    local:local,
    duration:duration.hours(),
    texto:texto
};

module.exports = router;