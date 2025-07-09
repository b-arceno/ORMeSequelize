const Produto = require('../models/produtoModel');
const Comentario = require('../models/comentarioModel');

// Associação 1:N (hasMany)
Produto.hasMany(Comentario, { foreignKey: 'produtoId', as: 'comentarios' });
Comentario.belongsTo(Produto, { foreignKey: 'produtoId', as: 'produto' });

module.exports = { Produto, Comentario };
