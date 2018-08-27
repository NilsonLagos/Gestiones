const Model = require('../../../database/models/milestone')
const getById = require('../../../utils/database/getById')

const addMilestone = (root, args) => (
    Model.create({ ...args }).then( x => { return x.dataValues })
)

const editMilestone = (root, args) => (
    Model.update(
        { ...args },{returning: true, where: { id: args.id }}
    ).then(()=>getById(args.id,Model))
)

const deleteMilestone = (root, {id}) => Model.destroy({ where: { id } })
    .then((x)=>id)

module.exports = { addMilestone, editMilestone, deleteMilestone }