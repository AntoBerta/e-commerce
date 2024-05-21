import { ValidarFormulario, Login, checkLocalStorage } from './funciones.js';
//import { checkLocalStorage, expo } from './js/funciones';

let formulario = document.getElementById("envio");

//let miFormulario = formularios[0];
//miFormulario.onsubmit = ValidarFormulario
//console.log(formularios);

 formulario.onsubmit = ValidarFormulario


if (checkLocalStorage()) {
    formulario.display = 'none'
} else {
    //
}

