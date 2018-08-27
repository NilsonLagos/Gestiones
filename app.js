const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./graphql/schema')
const config = require('./_config')
require('./database/connection')
const server = new ApolloServer({ schema })

const app = express()
server.applyMiddleware({ app })
app.listen( config.port, () =>
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
)
