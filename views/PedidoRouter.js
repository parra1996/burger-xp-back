const express = require('express');
const router = express.Router();

const PedidoController = require('../controllers/PedidoController');

router.get('/', PedidoController.bringOrders);


module.exports = router;