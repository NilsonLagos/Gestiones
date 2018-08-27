const {  gql } = require('apollo-server-express');

const Model = gql`
  type Milestone {
    id: ID,
    idProposal: Int
    milestone: String,
    days: Int,
    hours: Int,
    createdAt: Date
  },
`;  

const Create = gql`
  extend type Mutation {
    addMilestone( 
      idProposal: Int,
      milestone: String,
      days: Int,
      hours: Int,
    ): Milestone
  }
`;


const Modify = gql`
  extend type Mutation {
    editMilestone( 
      id: ID,
      idProposal: Int,
      milestone: String,
      days: Int,
      hours: Int,
    ): Milestone
  }
`;

const Destroy = gql`
  extend type Mutation {
    deleteMilestone( 
      id: ID
    ): Milestone
  }
`;

const Query = gql`
 extend type Query{
        milestones: [Milestone],
        milestone(id:ID): Milestone  
    },
`
module.exports = ()=>[Query, Model, Create, Modify, Destroy]