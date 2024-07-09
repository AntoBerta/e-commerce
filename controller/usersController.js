const db = require('../db/db');

const allUsers =  (request, response) => {
    const sql = 'SELECT * FROM dbweb.bt_suscriptores';
    db.query(sql, (err, result) => {
        if (err) throw err;
        response.send(result);        
    });
};

module.exports = { allUsers };