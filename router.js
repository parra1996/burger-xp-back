const router = require('express').Router();

const UserRouter = require('./views/UserRouter');
const HamburguesaRouter = require('./views/hamburguesaRouter');
const PedidoRouter = require("./views/PedidoRouter");
const ComentarioRouter = require("./views/ComentarioRouter");

router.use('/users', UserRouter);
router.use('/hamburguesa', HamburguesaRouter);
router.use("/pedido", PedidoRouter);
router.use("/comentario", ComentarioRouter);

module.exports = router;
