const {Usuario} = require("../models/usuario");

module.exports = (req, res, next) => {

    const id = req.body.id;
    Usuario.findOne({
        where : { id : id }
    }).then(usuarioEncontrado => {

        if(usuarioEncontrado.rol === "admin"){
            next();
        }else {
            res.send('User is not Admin')
        }
    }).catch(error => {
        res.send(error)
    })

};