const {  gql } = require('apollo-server-express');

const Model = gql`
  type Deliverable {
    id: ID,
    idProposal: Int
    deliverable: String,
    price: Float,
    createdAt: Date
  },
`;  

const Create = gql`
  extend type Mutation {
    addDeliverable( 
        idProposal: Int
        deliverable: String,
        price: Float
    ): Deliverable
  }
`;


const Modify = gql`
  extend type Mutation {
    editDeliverable( 
      id: ID,
        idProposal: Int
        deliverable: String,
        price: Float,
    ): Deliverable
  }
`;

const Destroy = gql`
  extend type Mutation {
    deleteDeliverable( 
      id: ID
    ): Deliverable
  }
`;

const Query = gql`
 extend type Query{
        deliverables: [Deliverable],
        deliverable(id:ID): Deliverable  
    },
`
module.exports = ()=>[Query, Model, Create, Modify, Destroy]