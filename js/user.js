class User {
    constructor(jsonData) {
        this.lastName = jsonData['lastName'];
        this.maidenName = jsonData['maidenName']
        this.age = jsonData['age']
        this.gender = jsonData['gender'];
        this.email = jsonData['emai;'];
        this.username = jsonData['userName'];
    }

    Saludo() {
        return 'Hola, soy : .....' + this.lastName;
    }
}

let myUser = new User(JSON.parse('{\
"lastName": "Ernser",\
"maidenName": "Feeney",\
"age": 23,\
"gender": "male",\
"email": "ckensleyk@pen.io",\
"username": "ckensleyk",\
}')
);

console.log(myUser.age);
console.log(myUser.Saludo());

