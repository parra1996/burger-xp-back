const express = require('express');
const router = express.Router();
// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

const UsuariosController = require('../controllers/UserController');

router.get('/', UsuariosController.traeUsuarios);

router.post('/', UsuariosController.register);

router.post('/login', UsuariosController.login);

module.exports = router;
