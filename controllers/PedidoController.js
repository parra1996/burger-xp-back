const { Pedido } = require('../models/index');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const auth = require('../config/auth');

const PedidoController = {}

PedidoController.bringOrders =(req,res)=> {
   Pedido.findAll()
   .then(data=> {
    res.send(data)
   })
}

module.exports = PedidoController;
