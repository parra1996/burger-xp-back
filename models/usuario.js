'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(models.Pedido, {
        foreignKey: 'usuarioID'
        });
        this.hasMany(models.Comentario, {
        foreignKey: 'usuarioID'
        });
    }
  }
  Usuario.init({
    name: DataTypes.STRING,
    surname: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};