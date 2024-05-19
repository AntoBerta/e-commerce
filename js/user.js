class User {
    constructor(jsonData){
       this.lastName = jsonData['lastName']; 
        this.maidenName = jsonData['maidenName']
        this.age = jsonData['age']
        this.gender = jsonData['gender'];
        this.email = jsonData['emai;'];  
        this.username = jsonData['userName'];
    }
}

let myUser = new User('{\
"lastName": "Ernser",\
"maidenName": "Feeney",\
"age": 23,\
"gender": "male",\
"email": "ckensleyk@pen.io",\
"username": "ckensleyk",\
}');

console.log(myUser.age);
