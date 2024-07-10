const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const authMiddleware = require('../middleware/authMiddleware');

// Esta ruta requiere autenticacion.. 
router.get("/profile", authMiddleware.tokenVerification , userController.profileUser);

// Obtiene informacion de UN usuario..
router.get("/info/:id", userController.getUser);

router.post("/create" , userController.createUser );

router.delete("/:id" , userController.deleteUser );

router.put("/:id" , userController.updateUser );


module.exports = router;