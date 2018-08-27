const TypeDefs = require('./ExportTypeDefs')
const allMutationsResolvers = require('./resolversMutations')
const allQueriesResolvers = require('./resolversQueries')
const nestedQueries = require('./nestedQueries')
const Date = require('./DateType')

module.exports={
    TypeDefs,
    allMutationsResolvers,
    allQueriesResolvers,
    nestedQueries,
    Date
}