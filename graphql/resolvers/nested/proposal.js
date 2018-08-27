const Strength = require('../../../database/models/strength')
const Deliverable = require('../../../database/models/deliverable')
const Milestone = require('../../../database/models/milestone')

const Proposal = {
    strengths: ({ id }) => Strength.findAll({ where: { idProposal: id }, raw: true }).then(x => x),
    deliverables: ({ id }) => Deliverable.findAll({ where: { idProposal: id }, raw: true }).then(x => x),
    milestones: ({ id }) => Milestone.findAll({ where: { idProposal: id }, raw: true }).then(x => x)
}

module.exports = Proposal
