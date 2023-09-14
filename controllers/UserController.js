const { Usuario } = require("../models/index");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UsuariosController = {};

UsuariosController.traeUsuarios = (req, res) => {
  Usuario.findAll().then((data) => {
    res.send(data);
  });
};

module.exports = UsuariosController;
