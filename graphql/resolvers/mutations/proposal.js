const Proposal = require('../../../database/models/proposal')

const getProposalById = (id) => {
    return Proposal.findById(id).then(proposal=>{
        return proposal.dataValues;
    });
};

const addProposal = (root, args) => (
    Proposal.create({ ...args }).then( x => { return x.dataValues })
)

const editProposal = (root, args) => (
    Proposal.update(
        { ...args },{returning: true, where: { id: args.id }}
    ).then(()=>getProposalById(args.id))
)

const deleteProposal = (root, {id}) => Proposal.destroy({ where: { id } })
    .then((x)=>{
        return id
    })

module.exports = {addProposal, editProposal, deleteProposal}