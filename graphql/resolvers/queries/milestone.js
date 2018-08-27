const Model = require('../../../database/models/milestone')
const getById = require('../../../utils/database/getById')

const milestones = () => Model.findAll({raw:true}).then(x=>x)
const milestone = (root, {id}) => getById(id,Model)

module.exports = { milestones, milestone }
