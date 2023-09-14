const router = require("express").Router();

const UserRouter = require("./views/UserRouter");
// const RecetasRouter = require("./views/RecetasRouter");
// const Receta_adquiridaRouter = require("./views/Receta_adquiridaRouter");
// const DietasRouter = require("./views/DietasRouter");

router.use("/users", UserRouter);
// router.use("/recetas", RecetasRouter);
// router.use("/receta_adquirida", Receta_adquiridaRouter);
// router.use("/dietas", DietasRouter);

module.exports = router;
