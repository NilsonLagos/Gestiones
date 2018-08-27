const {  gql } = require('apollo-server-express');
const {makeExecutableSchema} = require('graphql-tools');
const { TypeDefs, allQueriesResolvers, allMutationsResolvers, nestedQueries, Date } = require('../utils/graphql/GraphqlUtils')

const resolvers = {
    Query: {
        ...allQueriesResolvers
      },
    Mutation: {
        ...allMutationsResolvers
    },    
    ...nestedQueries,
    ...Date
}

// console.log(resolvers)

const Query = gql`
    scalar Date
    type Query{ null: Boolean },
` 
const Mutation = gql`
    type Mutation{ null: Boolean }
`

const schema = makeExecutableSchema({
    typeDefs: [ Query, Mutation, ...TypeDefs ],
    resolvers
});
module.exports =  schema
