const Sequelize = require('sequelize')
const _config = require('../_config')
const DB = _config.DB[process.env.NODE_ENV]

let sequelize = null

sequelize = new Sequelize(DB.database, DB.user, DB.pass, {  
  dialect: 'mssql',
  operatorsAliases: false,
  logging: false,
  dialectOptions: {
    connectionString: DB.host,
    encrypt: true
  }
})

module.exports = { sequelize, Sequelize }
