const Model = require('../../../database/models/strength')
const getById = require('../../../utils/database/getById')

const strengths = () => Model.findAll({raw:true}).then(x=>x)
const strength = (root, {id}) => getById(id,Model)

module.exports = { strengths, strength }
