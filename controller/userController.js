const db = require('../db/db');




const getUser = (req, res) => {
    const id = req.params.id; // OJO con este parametro...
    const sql = 'SELECT * FROM dbweb.Users WHERE idUser=' + id;
  
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);        
    });

 
};

const updateUser = (req, res) => {
    const id = req.params.id; // OJO con este parametro...
    const dataRequest = req.body;

    // Puedo decidir si necesito si o si todos los parametros o puedo manejar solo algunos...
    const {username, email, gender, age, maidenName,lastName,avatarURL}= dataRequest ;

    // si no tengo todos los paramatros arrojar error... o no hacer nada..
    //UPDATE `practica001`.`users` SET `username` = 'Alejandro' WHERE (`idUser` = '10');
    // decidir como lo vamos a hacer si todos o de a uno... 
    const sql = 'UPDATE `dbweb.`.`Users` SET `username` = ?, `email` = ?, `gender` = ?, `age` =?, `maidenName` = ?,`lastName` = ?,`avatarURL` = ? WHERE idUser=' + id;
    db.query(sql,[username, email, gender, age, maidenName,lastName,avatarURL] ,(err, result) => {
        if (err) throw err;
        res.send(result);        
    });

};


module.exports = { getUser, updateUser };