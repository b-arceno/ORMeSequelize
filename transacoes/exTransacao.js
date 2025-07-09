const sequelize = require('../database/connection');

async function transacaoExemplo() {
  const t = await sequelize.transaction();

  try {
    // Exemplo de operação 1
    // const produto = await Produto.create({ nome: 'Produto X', preco: 100 }, { transaction: t });

    // Exemplo de operação 2
    // await OutraOperacao(..., { transaction: t });

    await t.commit();
    console.log('Transação realizada com sucesso!');
  } catch (error) {
    await t.rollback();
    console.error('Erro na transação:', error);
  }
}

transacaoExemplo();
