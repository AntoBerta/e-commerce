const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

const tokenVerification = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if(!authHeader) {
        res.send(403).send( { auth:false, message:'Error: No esta autenticado..'});
    }

    const token = authHeader.split(' ')[1]; // capturar el token

    if(!token) {
        res.send(403).send( { auth:false, message:'Error: No esta autenticado o token erroneo..'});
    }

    jwt.verify(token, config.secretKey, (err, decoded ) => {
        if (err) {
            res.send(500).send( { auth:false, message:'Error: Token irreparable..'});
        }
        req.params.userId = decoded.id;
        next();       
    });

};

module.exports = { tokenVerification }