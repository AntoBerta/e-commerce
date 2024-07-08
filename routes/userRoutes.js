
const express= require ("express");
const router= express.Router();


router.get("/:id",(req,res   ) => { 
    const id= req.params.id;
    response.send("respuesta de informacion de usuario con ID especializado WIP...");
});

module.exports = router;
