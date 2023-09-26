const express = require('express');
const router = express.Router();

const PedidoController = require('../controllers/PedidoController');

router.get('/', PedidoController.bringOrders);

router.post('/makeOrder', PedidoController.makeOrder);



module.exports = router;
