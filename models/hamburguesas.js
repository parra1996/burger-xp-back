'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hamburguesas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Pedido, {
        foreignKey: 'hamburguesaID'
      });
      this.hasMany(models.Comentario, {
        foreignKey: 'hamburguesaID'
      });
    }
  }
  Hamburguesas.init({
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    preparation: DataTypes.STRING,
    comments: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Hamburguesas',
  });
  return Hamburguesas;
};