const { Sequelize } = require('sequelize');

// Altere os dados conforme sua configuração local
const sequelize = new Sequelize('exemplo', 'root', '0301', {
  host: 'localhost',
  dialect: 'mysql', // Pode ser 'postgres', 'sqlite', etc.
});

// Testar conexão com o banco
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
})();

module.exports = sequelize;
