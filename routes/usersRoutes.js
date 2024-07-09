
const express= require ("express");
const router= express.Router();
const db= require('../db/db');

router.get ("/list",(request,response)=> {
    response.send ("respuesta lista de usuarios WIP....");
});



/*
app.get("/users/list",(request,response) => {
    response.send("respuesta lista de usuarios WIP...")
});
*/

module.exports = router;
