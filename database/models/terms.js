const {sequelize,Sequelize} = require('../connection')

const clientes = sequelize.define('clientes', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    idProposal: Sequelize.STRING(500),
    value: Sequelize.TEXT
  })
    module.exports = terms
