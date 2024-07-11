const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
//const usersController = require('../controller/usersController');
const authMiddleware = require('../middleware/authMiddleware');

// Esta ruta requiere autenticacion.. 
/*
router.get("/profile", authMiddleware.tokenVerification , userController.profileUser);

// Obtiene informacion de UN usuario..

router.put("/:id" , userController.updateUser );
router.post("/create" , userController.createUser );
router.get("/info/:id", userController.getUser);
router.delete("/:id" , userController.deleteUser );
*/


// Obtiene una lista de usuario..
//router.get("/list", usersController.allUsers );
//router.get("/info/:id", userController.getUser);

router.get("/info/:id", userController.getUser);

router.put("/update/:id", userController.updateUser );

module.exports = router;