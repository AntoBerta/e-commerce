import { ValidarFormulario, checkLocalStorage } from './funciones.js';

const formulario = document.getElementById("envio");

formulario?.addEventListener("submit", ValidarFormulario);

/*if (checkLocalStorage() && formulario) {
    formulario.style.display = 'none';
}*/

