const Sequelize = require('sequelize')
const _config = require('../../_config')
const DB = _config.DB[process.env.NODE_ENV]
let sequelize = null

sequelize = new Sequelize("", DB.user, DB.pass, {  
  dialect: 'mssql',
  operatorsAliases: false,
  logging: false,
  dialectOptions: {
    connectionString: DB.host,
    encrypt: true
  }
})

async function createDataBase(){
  await sequelize.query("SELECT NAME FROM MASTER.DBO.SYSDATABASES WHERE NAME = :name", { 
    replacements:{ name: DB.database } , 
    type: Sequelize.QueryTypes.SELECT 
  }).then( databaseName => {
    if(databaseName == '')
      sequelize.query(`CREATE DATABASE ${DB.database}`)
    
  })
  await createTables()
  process.exit()
}

const createTables = () => {
  require('require-all')({
    dirname     : require('../rootRoute') + 'database/models',   
    resolve     : function (Controller) {
        Controller.sync({alter: true})
        console.log(Controller,'done')     
    }
  })
}

createDataBase()
