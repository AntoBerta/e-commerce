const express= require ("express");
const router= express.Router();
const saludoController=require ('../controller/saludoController');

const MiSaludo = (request,response)=> {
    response.send ("Hola mundo desde express ... con watch desde routes desde una funcion ..");
};

router.get ("/",saludoController.MiSaludo);

module.exports = router;
