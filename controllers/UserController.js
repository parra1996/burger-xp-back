const { Usuario } = require('../models/index');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const UsuariosController = {};

UsuariosController.traeUsuarios = (req, res) => {
  Usuario.findAll().then((data) => {
    res.send(data);
  });

};

UsuariosController.register = (req, res) => {
  const {name, age, surname, email, gender, password}  = req.body;

    const hashPassword = bcrypt.hashSync(password, Number.parseInt(10));

    Usuario.findAll({
        where: {
          email: {
              [Op.like]: email
          }
        }
    }).then(datosRepetidos => {

      console.log(datosRepetidos, 'ESTO ES DATOS REOETUDOS')
        if (datosRepetidos === 0 || []) {

            Usuario.create({
              name,
              surname,
              age,
              gender,
              email,
              hashPassword,
            }).then(usuario => {
                    res.send(`${usuario.name}, ha sido registrado con exito`);
            })
            .catch((error) => { 
                res.send(error);
            });

        } else {
            res.send('El usuario con ese e-mail ya existe en nuestra base de datos');
        }
    }).catch(error => {
        res.send(error)
    });

};


module.exports = UsuariosController;
