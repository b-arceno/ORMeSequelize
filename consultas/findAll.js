const Produto = require('../models/produtoModel');

async function buscarTodosProdutos() {
  try {
    const produtos = await Produto.findAll();
    console.log(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
}

buscarTodosProdutos();
