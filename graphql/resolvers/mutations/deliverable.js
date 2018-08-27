const Model = require('../../../database/models/deliverable')
const getById = require('../../../utils/database/getById')

const addDeliverable = (root, args) => (
    Model.create({ ...args }).then( x => { return x.dataValues })
)

const editDeliverable = (root, args) => (
    Model.update(
        { ...args },{returning: true, where: { id: args.id }}
    ).then(()=>getById(args.id,Model))
)

const deleteDeliverable = (root, {id}) => Model.destroy({ where: { id } })
    .then((x)=>id)

module.exports = { addDeliverable, editDeliverable, deleteDeliverable }