const express= require ("express");
const router= express.Router();

const saludoController=require ('../controller/saludoController');

const MiSaludo = (request,response)=> {
    response.send ("Hola mundo desde express ... con watch desde route desde una funcion ..")
};

router.get ("/",MiSaludo);

module.exports = router;
