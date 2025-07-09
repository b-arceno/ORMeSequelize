const Produto = require('../models/produtoModel');
const Categoria = require('../models/categoriaModel');

async function buscarProdutosComCategorias() {
  try {
    const produtos = await Produto.findAll({
      include: [{ model: Categoria, as: 'categorias' }]
    });
    console.log(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos com categorias:', error);
  }
}

buscarProdutosComCategorias();
