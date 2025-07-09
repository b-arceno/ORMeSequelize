const Produto = require('../models/produtoModel');

async function buscarProdutoPorId(id) {
  try {
    const produto = await Produto.findByPk(id);
    console.log(produto);
  } catch (error) {
    console.error('Erro ao buscar produto por ID:', error);
  }
}

buscarProdutoPorId(1);
