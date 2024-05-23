/*
1- El formulario que te paso tiene varios campo. por lo cual 
2- Tenes que ver uno por uno y validarlos. 
3- Si estan bien,  que podemos hacer? 
4- Lo mandamos a backend
5- si esta mal alerta con cartel de exito.   

*/
const ERROR_COLOR = "red";
const VALID_COLOR = "green";
const DEFAULT_EMPTY = "";
const URL_LOGIN = "https://dummyjson.com/auth/login";

function changeBorderColor(rgb, element) {
    element.style.borderColor = rgb;
}

function conexionBackendAPI() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let fail = Math.random() > 0.5; // de prueba de forma aleatoria a veces es verdadero otras falso

            if (fail) {
                reject("Error: fallo irrecuperable");
            } else {
                resolve("Finalizacion satisfactoria");
            }


        }, 2000
        )

    });
}


function isEmailValid(email) {
    //vamos a validar lo siguiente o las regular expresion
    // 1. arranque con arroba
    // 2. que tenga uno solo @
    // 3. no puede ser la ultima letra
    // 4. terminar .com

    let hasDotCom = email.endsWith(".com"); // este es el 4

    let arrobaIndex = email.indexOf("@");

    // if arrobaIndex == 0 OR arrobaIndex === -1
    let arrobaIncorrecto = (arrobaIndex === 0) || (arrobaIndex === -1);

    if (arrobaIncorrecto) {
        return false;
    }
    // podria pasar que tuviera mas de un arroba ale@@@@@.com
    //falta verificar 
    // arroba no repetido
    let arrobaNoRepetido = true;

    return hasDotCom && !arrobaIncorrecto && arrobaNoRepetido;

}



export function ValidarFormulario(event) {

    event.preventDefault(); // que no se borren los archivos. a partir de este mom el comp. lo manejo yo
    console.log(event);
    let miFormulario = event.target; // cuando el usuario hace un click desencadena un evento. 
    let isValid = false;
    //let isTelValid = true;
    let contador = 0;

    for (let index = 0; index < miFormulario.length; index++) {
        const element = miFormulario[index];
        console.log(element);

        switch (element.type) {
            case "text":
                if (element.value == "") {
                    isValid = false;
                    changeBorderColor(ERROR_COLOR, element);
                } else {
                    isValid = true;
                    changeBorderColor(VALID_COLOR, element);
                }
                break;
            case "checkbox":
                if (element.value == "") {
                    isValid = false;
                    changeBorderColor(ERROR_COLOR, element);
                } else {
                    isValid = true;
                    changeBorderColor(VALID_COLOR, element);
                }
                break;
            case "email":
                if (element.value == "") {
                    isValid = false;
                    changeBorderColor(ERROR_COLOR, element);
                } else {
                    isValid = true;
                    changeBorderColor(VALID_COLOR, element);
                }
                //isValid = isEmailValid(element.value);
                break;
            case " tel":
                if (element.value == "") {
                    isValid = false;
                    changeBorderColor(ERROR_COLOR, element);
                } else {
                    isValid = true;
                    changeBorderColor(VALID_COLOR, element);
                }
                //  isTelValid = isValidTelField(element.value);
                break;
            case "textarea":
                if (element.value == " ") {
                    isValid = false;
                    changeBorderColor(ERROR_COLOR, element);
                } else {
                    isValid = true;
                    changeBorderColor(VALID_COLOR, element);
                }
            default:
                console.log("Default...");
                break;
        }

        if (isValid) {
            //changeBorderColor(VALID_COLOR, element);
            contador++;
            if (contador === 13){

                conexionBackendAPI()
                    .then(() => {
                        // Redirect the user upon 
                        alert("Suscripcion satisfactoria");
                        /*window.location.href = "https://formspree.io/f/xvoywzpz";*/
                    })
                    .catch(() => {
                        // Alert the user if the API call fails
                        alert("Los datos no son correctos");
                    })
                /*.finally(() => {
                    // This will execute regardless of the promise's outcome
                    alert("Esta completo");
                });*/
            } else {
                // Handle the case when the condition is false
                // You might want to alert the user or log an error here

            }
        } else {
            //changeBorderColor(VALID_COLOR, element);
        }

    }
}

export function Login(event) {

    event.preventDefault();


    let usernameHTMLElement = document.getElementById("firstname");
    let addressHTMLElement = document.getElementById("address");
    let emailHTMLElement = document.getElementById("email");
    let submitHTMLElement = document.getElementById("submit");
    let messageHTMLElement = document.getElementById("message");

    passwordHTMLElement.disabled = true;

    console.log(submitHTMLElement);

    let data = {

        username: usernameHTMLElement.value,
        password: passwwordHTMLElement.value,
        email: emailHTMLElement
    }

    //DATA es un objeto en javascript
    // Request necesita convertir ese objeto en json
    let request = {
        method: " POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    let finalMessage = "";

    //https://dummyjson.com/
    //usrio valido = kminchelle@qq.com pass:0lelplR
    fetch(URL_LOGIN, request) // aca puedo poner el fecth debo poner el fecthpara mandar data al backend
        .then((res) => res.json())
        .then((res => {
            console.log();
            //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

            if (res.hasOwnProperty("message")) {
                console.log("algo mal salio");
                finalMessage = res.message;
            } else {
                finalMessage = "Welcome" + res.firstName;
                miFormulario.style.display = 'None';

                localStorage.setItem("name", res.firstName);
                localStorage.setItem("isLogged", 'true');

                //si esta todo bien guardo todo en el local storahge
            }
        }))
        .catch(() => alert("salio mal"))
        .finally(() => {
            alert("esto compilo");
            submitHTMLElement.disabled = false;
            mesageHTMLElement.innerHtml = finalMessage;
        });
}

//si esta gurdada la info te devuelve true or false local storage
export function checkLocalStorage() {
    let isLogged = localStorage.getItem("isLogged");
    let name = localStorage.getItem("name");

    let existeDataPrevia = (name !== undefined) && (isLogged !== undefined);
    return existeDataPrevia;
}