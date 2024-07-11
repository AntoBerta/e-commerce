const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../db/userDataModel');
// seguramente configar opciones...
const config = require('../config/config');
const db = require('../db/db');


const register =  (request, response) => {

    const dataRequest = (Object.keys(request.params).length > 0 ) ? request.params: request.body;

    const { username, password, email, gender, age, maidenName, lastName,avatarURL } = dataRequest;
    // a partir de aca oculto la contraseña...
    const passwordHashed = bcrypt.hashSync(password, 8);

    const userRegistration = { id: users.length + 1, username, password: passwordHashed };
    users.push(userRegistration);

    // generamos un token con identificaion unica...
    const token = jwt.sign( { id: userRegistration.id }, config.secretKey, { expiresIn: config.tokenExpiresIn}  );

    const sql = 'INSERT INTO `dbweb`.`Users` (`username`, `email`, `gender`, `age`, `maidenName`, `lastName`, `avatarURL`) VALUES (?, ?, ?, ?, ?, ?, ?);'
    db.query(sql,[username, email, gender, age, maidenName,lastName,avatarURL] ,(err, result) => {
        if (err) throw err;
        response.send(result);        
    });

    response.status(200).send( { auth:true, token});
};

module.exports = { register };