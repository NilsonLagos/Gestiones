const {  gql } = require('apollo-server-express');

const Model = gql`
  type Strength {
    id: ID,
    idProposal: Int
    value: String,
    createdAt: Date
  },
`;  

const Create = gql`
  extend type Mutation {
    addStrength( 
      idProposal: Int,
      value: String
    ): Strength
  }
`;


const Modify = gql`
  extend type Mutation {
    editStrength( 
      id: ID,
      idProposal: Int,
      value: String
    ): Strength
  }
`;

const Destroy = gql`
  extend type Mutation {
    deleteStrength( 
      id: ID
    ): Strength
  }
`;

const Query = gql`
 extend type Query{
        strengths: [Strength],
        strength(id:ID): Strength  
    },
`
module.exports = ()=>[Query, Model, Create, Modify, Destroy]