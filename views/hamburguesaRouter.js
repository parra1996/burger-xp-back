const express = require('express');
const router = express.Router();

const hamburguesaController = require('../controllers/HamburguesaController');

router.get('/', hamburguesaController.bringAll);

router.post('/create', hamburguesaController.createBurger)

module.exports = router;
