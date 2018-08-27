const {  gql } = require('apollo-server-express');

const Proposal = gql`
  type Proposal {
    id: ID,
    contactName: String,
    companyName: String,
    companyDescription: String,
    projectName: String,
    projectDescription: String,
    projectGoals: String,
    logo: String,
    image: String,
    viewed: String,
    ownerIP: String,
    clientIP: String,
    strengths: [Strength],
    deliverables: [Deliverable],
    milestones: [Milestone]
  },
`;  

const CreateProposal = gql`
  extend type Mutation {
    addProposal( 
    contactName: String,
    companyName: String,
    companyDescription: String,
    projectName: String,
    projectDescription: String,
    projectGoals: String,
    logo: String,
    image: String,
    viewed: String,
    ownerIP: String,
    clientIP: String
    ): Proposal
  }
`;


const ModifyyProposal = gql`
  extend type Mutation {
    editProposal( 
      id: ID,
    contactName: String,
    companyName: String,
    companyDescription: String,
    projectName: String,
    projectDescription: String,
    projectGoals: String,
    logo: String,
    image: String,
    viewed: String,
    ownerIP: String,
    clientIP: String
    ): Proposal
  }
`;

const DestroyProposal = gql`
  extend type Mutation {
    deleteProposal( 
      id: ID
    ): Proposal
  }
`;

const QueryProposal = gql`
 extend type Query{
        proposals: [Proposal],
        proposal(id:ID): Proposal  
    },
`
module.exports = ()=>[QueryProposal, Proposal, CreateProposal, ModifyyProposal, DestroyProposal]