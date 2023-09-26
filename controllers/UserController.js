const { Usuario } = require('../models/index');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const auth = require('../config/auth');
const UsuariosController = {};

UsuariosController.traeUsuarios = (req, res) => {
  Usuario.findAll().then((data) => {
    res.send(data);
  });
};

UsuariosController.register = (req, res) => {
  const { name, age, surname, email, gender, password } = req.body;

  const hashPassword = bcrypt.hashSync(password, Number.parseInt(auth.rounds));

  Usuario.findAll({
    where: {
      email: {
        [Op.like]: email,
      },
    },
  })
    .then((datosRepetidos) => {
      if (datosRepetidos === 0 || []) {
        Usuario.create({
          name,
          surname,
          age,
          gender,
          email,
          password: hashPassword,
        })
          .then((usuario) => {
            res.send(`${usuario.name}, ha sido registrado con exito`);
          })
          .catch((error) => {
            res.send(error);
          });
      } else {
        res.send(
          'El usuario con ese e-mail ya existe en nuestra base de datos'
        );
      }
    })
    .catch((error) => {
      res.send(error);
    });
};

UsuariosController.login = (req, res) => {
  // const { password} = req.body;
  const password = req.body.password;
  // const email = req.body.email; // me elimina esta constante dentro del findone

  Usuario.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((element) => {
      if (!element) {
        res.send('Usuario o contraseña inválido');
      } else {
        if (bcrypt.compareSync(password, element.password)) {
          const token = jwt.sign({ usuario: element }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });

          res.json({
            usuario: element,
            token,
          });
        } else {
          res.send('revisa tus datos');
        }
      }
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = UsuariosController;
