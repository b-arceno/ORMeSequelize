const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const DetalheProduto = sequelize.define('DetalheProduto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
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
  tableName: 'detalhes_produto',
  timestamps: false
});

module.exports = DetalheProduto;
