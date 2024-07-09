const express= require ("express");
const router= express.Router();
const db = require('../db/db');


router.get ("/list",(request,response)=> {
 


       const sql = 'SELECT * FROM bt_suscriptores';
       db.query(sql, (err, result) => {
           if (err) throw err;
           response.send(result);       
       });
  
  // module.exports = { allUsers };
});

