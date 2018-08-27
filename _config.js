require('dotenv').config()

module.exports = {
  DB:{
    prod:{
      host: process.env.prodHost,
      database: process.env.prodDatabase,
      user: process.env.prodUser,
      pass: process.env.prodPass
    },
    dev:{
      host: process.env.devHost,
      database: process.env.devDatabase,
      user: process.env.devUser,
      pass: process.env.devPass
    },
    test:{
      host: process.env.testHost,
      database: process.env.testDatabase,
      user: process.env.testUser,
      pass: process.env.testPass
    }
  },
  port: process.env.port || 4000
}