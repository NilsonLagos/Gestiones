let TypeDefs =[]
require('require-all')({
    dirname     :  require('../rootRoute') + '/graphql/typeDefs',   
    resolve     : function (type) {       
        TypeDefs.push(type)
    }
});
module.exports = TypeDefs
