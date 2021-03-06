//Ejercicio Incremental Lunes

let userName = document.getElementById("nombre-user");
let dataUser = document.getElementById("data-user");
let usuarios = [];
let imagen_p = document.getElementById('img-principal');
let imagen_m = document.getElementById('img-perfil');
let nombre_user = document.getElementById('nombre-user');
let nombre_user_p = document.getElementById('nombre-user-p');


//URL de la API
const API_URL = 'https://randomuser.me/api/';
//const API_KEY = 'GQXN-X6N1-ZQ3D-4UPC';

async function loadUser() {
    return (await fetch(`${API_URL}?results=10&inc=gender,name,email,phone,picture,dob`)).json();
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        let users = await loadUser();
        let resultado = users.results;

        imagen_p.src = `${Object.values(resultado[0].picture)[0]}`;
        imagen_m.src = `${Object.values(resultado[0].picture)[1]}`;
        nombre_user.innerHTML = `${Object.values(resultado[0].name).join(' ')}.`;
        nombre_user_p.innerHTML = `${Object.values(resultado[0].name).join(' ')}.`;
        dataUser.innerHTML = `Email: ${resultado[0].email} <br/> Phone: ${resultado[0].phone} <br/> Edad: ${Object.values(resultado[0].dob)[1]} años.`;
        console.log(Object.values(resultado[0].name));
        console.log(Object.values(resultado[0].picture)[1]);
        console.log(users.results);
    } catch (e) {
        console.log('Ocurrio un error al solicitar los datos: ' + e.message);
    }
});


//Se agrego la rama desarrollo


