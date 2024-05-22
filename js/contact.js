
let miFormulario = document.getElementsByClassName('subscription-form');
console.log(miFormulario);
console.log(miFormulario[0]); //accedo al primer dato del formulario


let miFormulario1input = miFormulario[0]; // eligiendo 1 formulario, el unico pero el que me interesa

console.log(miFormulario1input);

miFormulario.onsubmit = () => { alert(" tocaste un boton" ) }// tengo que escrbir una funcion que sera llamada cuando alguien aprete/toque el boton.


import { ValidarFormulario } from "./funciones.js";

miFormulario.onsubmit = ValidarFormulario; // lo veo en funciones.js