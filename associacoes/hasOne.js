const Produto = require('../models/produtoModel');
const DetalheProduto = require('../models/detalheModel');

// Associação 1:1 (hasOne)
Produto.hasOne(DetalheProduto, { foreignKey: 'produtoId', as: 'detalhe' });
DetalheProduto.belongsTo(Produto, { foreignKey: 'produtoId', as: 'produto' });

module.exports = { Produto, DetalheProduto };
