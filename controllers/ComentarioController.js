const comentario = require('../models/comentario');
const { Comentario } = require('../models/index');

const ComentarioController = {};

ComentarioController.showComment = (req,res) => {
    comentario.findAll()
    .then(data => {
        res.send(data)
    })
}

ComentarioController.makeComment = (req,res) => {
    const { UsuarioID, hamburguesaID, comment} = req.body;

    try {
        Comentario.create({
            UsuarioID,
            hamburguesaID,
            comment
        })
        .then(order => {
            res.send(order)
        })
    }catch(error){
        res.send(error)
    }
}

ComentarioController.getCommentByID = async (req,res) => {
    const { usuarioID, hamburguesaID} = req.body;
    try {
        const consulta = ` SELECT comentarios.comment AS comentario 
        FROM comentarios WHERE comentarios.UsuarioID = ${usuarioID}
        AND comentarios.hamburguesaID = ${hamburguesaID} `;

        const resultado = await Comentario.sequelize.query(consulta,{
            type: Comentario.sequelize.QueryTypes.SELECT
        });
        if(resultado){
            res.send(resultado);
        }
    }catch(error){
        res.send(error)
    }
}
module.exports = ComentarioController;
