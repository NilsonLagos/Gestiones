const Model = require('../../../database/models/strength')
const getById = require('../../../utils/database/getById')

const addStrength = (root, args) => (
    Model.create({ ...args }).then( x => { return x.dataValues })
)

const editStrength = (root, args) => (
    Model.update(
        { ...args },{returning: true, where: { id: args.id }}
    ).then(()=>getById(args.id,Model))
)

const deleteStrength = (root, {id}) => Model.destroy({ where: { id } })
    .then((x)=>id)

module.exports = { addStrength, editStrength, deleteStrength }