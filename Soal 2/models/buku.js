'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Buku.init({
    no_buku: DataTypes.STRING,
    nama_buku: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    penulis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Buku',
  });
  return Buku;
};