const getById = (id,Model) => {
    return Model.findById(id).then(x=>{
        return x.dataValues;
    });
};
module.exports = getById