const Comentario = require('../models/comentarioModel');
const Usuario = require('../models/usuarioModel');

// Associação N:1 (belongsTo)
Comentario.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });
Usuario.hasMany(Comentario, { foreignKey: 'usuarioId', as: 'comentarios' });

module.exports = { Comentario, Usuario };
