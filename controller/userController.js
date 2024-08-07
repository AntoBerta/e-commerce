const db = require('../db/db');

const profileUser = (req, res) => {
    const id = req.params.userId;// userId viene desde authMiddleware si y solo si el token es valido...
    // decidimos que actividades autorizadas se puede realizar...
    if(!id) {
        res.status(403).send("Acceso denegado, requiere autoneticacion..");
    }

    res.status(200).send("Acceso permitido...");
}

const getUser = (req, res) => {
    const id = req.params.id; // OJO con este parametro...
    const sql = 'SELECT * FROM `l-commerce_anto_ssh`.`Users` WHERE idUser=' + id;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);        
    });
}

const createUser = (req, res) => {
    
    // operador ternario:
    // (condicion) ? resultado verdadero: resultado falso
    const dataRequest = (Object.keys(req.params).length > 0 ) ? req.params: req.body;

    const {username, email, gender, age, maidenName,lastName,avatarURL}= dataRequest ;

    const sql = 'INSERT INTO `l-commerce_anto_ssh`.`Users` (`username`, `email`, `gender`, `age`, `maidenName`, `lastName`, `avatarURL`) VALUES (?, ?, ?, ?, ?, ?, ?);'
    db.query(sql,[username, email, gender, age, maidenName,lastName,avatarURL] ,(err, result) => {
        if (err) throw err;
        res.send(result);        
    });
}

const updateUser = (req, res) => {
    const id = req.params.id; // OJO con este parametro...
    const dataRequest = req.body;

    // Puedo decidir si necesito si o si todos los parametros o puedo manejar solo algunos...
    const {username, email, gender, age, maidenName,lastName,avatarURL}= dataRequest ;

    // si no tengo todos los paramatros arrojar error... o no hacer nada..
    //UPDATE `practica001`.`users` SET `username` = 'Alejandro' WHERE (`idUser` = '10');
    // decidir como lo vamos a hacer si todos o de a uno... 
    const sql = 'UPDATE `l-commerce_anto_ssh`.`Users` SET `username` = ?, `email` = ?, `gender` = ?, `age` =?, `maidenName` = ?,`lastName` = ?,`avatarURL` = ? WHERE idUser=' + id;
    db.query(sql,[username, email, gender, age, maidenName,lastName,avatarURL] ,(err, result) => {
        if (err) throw err;
        res.send(result);        
    });

};

const deleteUser = (req, res) => {
    const id = req.params.id; // OJO con este parametro...
    const sqlIDFavorito  = 'SELECT * FROM `l-commerce_anto_ssh`.`Users` WHERE idUser=' + id;
    
    db.query(sqlIDFavorito, (err, result) => {
        if (err) throw err;
      //  const idFavorito = result[0]; // pasar a string...
      //  const sqlDeletePeliculas = 'DELETE FROM l-commerce_anto_ssh.Peliculas WHERE Favoritos_idFavoritos=' + idFavorito +  ' and Favoritos_Users_idUser=' + id;
      //  const sqlDeleteFavoritos =  'DELETE from l-commerce_anto_ssh.Favoritos WHERE Users_idUser=' + id;
        const sqlDeleteUser = 'DELETE from `l-commerce_anto_ssh`.`Users` WHERE idUser='+id;
      //  const sql = sqlDeletePeliculas + ';' + sqlDeleteFavoritos + ';' + sqlDeleteUser ;
       const sql = sqlDeleteUser;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);        
        });
        
    });
}

module.exports = { getUser, createUser, updateUser, deleteUser, profileUser };