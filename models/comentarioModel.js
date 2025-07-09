const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Comentario = sequelize.define('Comentario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'produtos',
      key: 'id'
    }
  }
}, {
  tableName: 'comentarios',
  timestamps: false
});

module.exports = Comentario;
