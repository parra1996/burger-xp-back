'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(models.Hamburguesas, {
        foreignKey: 'hamburguesaID'
        });
        this.belongsTo(models.Usuario, {
        foreignKey: 'UsuarioID'
        });
    }
  }
  Comentario.init({
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};