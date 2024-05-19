/*
1- El formulario que te paso tiene varios campo. por lo cual 
2- Tenes que ver uno por uno y validarlos. 
3- Si estan bien,  que podemos hacer? 
4- Lo mandamos a backend
5- si esta mal alerta con cartel de exito.   

*/
const ERROR_COLOR = "red";
const URL_LOGIN = "https://dummyjson.com/auth/login";

function changeBorderColor(rgb, element) {
    element.style.changeBorderColor = rgb;
}

function conexionBackEndApi() {
    return Promise((resolve, reject) => {

        setTimeout(() => {

            let fail = true > 0.5; // esto es aleatoria porque en realidad viene del backend
            if (fail) {
                reject("error fallo  irrecuperable")
            } else {
                resolve("finalizazion satifactoria")
            }

        }, 2000)
    });
}

function isEmailValid(email) {
    //vamos a validar lo siguiente o las regular expresion
    // 1. arranque con arroba
    // 2. que tenga uno solo @
    // 3. no puede ser la ultima letra
    // 4. terminar .com

    let hasDotCom = email.endsWith(".com"); // este es el 4

    let arrobaIndex = email.indexOPF("@");

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

function requiredField(event) {
    if (element.value == null) {
        return false;
    } else {
        return true;
    }
}

export function ValidarFormulario(event) {
    // console.log( event );
    let miFormulario = event.currentTarget; // cuando el usuario hace un click desencadena un evento. 
    let isValid = true;


    for (let index = 0; index < miFormulario.lenght; index++) {
        const element = miFormulario[index];
        console.log(element);

        element.preventDefault(event); // que no se borren los archivos. a partir de este mom el comp. lo manejo yo

        switch (element.type) {
            case "text":
                isValid = requiredField(element.value);
                break;
            case "checkbox":
                console.log("encontre un error");
                break;
            case "email":
                isValid = isEmailValid(element.value);
                break;
            default:
                console.log("Default...")
                break;
        }

        if (!isValid) {
            // podre emitir una alerta sobre el campo invalido
            //o cambiar el color
            changeBorderColor(ERROR_COLOR, element.value);
            //changeBorderColor(ERROR_COLOR, text);
            break; // el fault se detiene

        }
        if (isValid) {

            conexionBackEndApi() // aca puedo poner el fecth debo poner el fecthpara mandar data al backend
                .then(() => alert("saliobien"))
                .catch(() => alert("salio mal"))
                .finally(() => alert("esto compilo"));

            // mando TODO al backend
            /*  setTimeout(() => {
                  alert("data enviada")
                    }, 5000); // 5000 ms = segundo
                  } else {
                      // ERROR hago otra cosa
                  } */
        } else {

        }
    }
}

export function Subscription(event) {

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
        password: passwwordHTMLElement.value
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

    let existeDataPrevia = (name !== undefined) && (islogged !== undefined);
    return existeDataPrevia;
}