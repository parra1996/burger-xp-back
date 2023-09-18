'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
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
        foreignKey: 'usuarioID'
      });
    }
  }
  Pedido.init({
    hamburguesaID: DataTypes.INTEGER,
    usuarioID: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};