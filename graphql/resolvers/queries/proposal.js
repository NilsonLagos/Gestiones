const Proposal = require('../../../database/models/proposal')

const getProposalById = (id) => {
    return Proposal.findById(id).then(proposal=>{
        return proposal.dataValues;
    });
};

const proposals = () => Proposal.findAll({raw:true}).then(x=>x);
const proposal = (root, {id}) => {
    return getProposalById(id)
}

module.exports = { proposals, proposal }
