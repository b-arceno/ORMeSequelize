const { Op } = require('sequelize');
const Produto = require('../models/produtoModel');

async function buscarProdutosCaros() {
  try {
    const produtos = await Produto.findAll({
      where: {
        preco: {
          [Op.gt]: 50
        }
      }
    });
    console.log(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos caros:', error);
  }
}

buscarProdutosCaros();
