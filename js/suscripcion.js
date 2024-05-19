import { Subscription, checkLocalStorage } from './funciones.js';
//import { checkLocalStorage, expo } from './js/funciones';

let formularios = document.getElementsByClassName("subscription-form");

let miFormulario = formularios[0];

console.log(formularios);

if (checkLocalStorage()) {
    miFormulario.display = 'none'
} else {
    //
}

miFormulario.onsubmit = Login