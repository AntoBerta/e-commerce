const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController')

// Obtiene una lista de usuario..
router.get("/list", usersController.allUsers );


module.exports = router;