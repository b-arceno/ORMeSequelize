const Produto = require('../models/produtoModel');
const Categoria = require('../models/categoriaModel');

// Associação N:N (belongsToMany) via tabela intermediária 'ProdutoCategoria'
Produto.belongsToMany(Categoria, { through: 'ProdutoCategoria', foreignKey: 'produtoId', as: 'categorias' });
Categoria.belongsToMany(Produto, { through: 'ProdutoCategoria', foreignKey: 'categoriaId', as: 'produtos' });

module.exports = { Produto, Categoria };
