const Model = require('../../../database/models/deliverable')
const getById = require('../../../utils/database/getById')

const deliverables = () => Model.findAll({raw:true}).then(x=>x)
const deliverable = (root, {id}) => getById(id,Model)

module.exports = { deliverables, deliverable }
