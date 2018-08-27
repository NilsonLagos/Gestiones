let allMutationsResolvers = {}
require('require-all')({
    dirname     : require('../rootRoute') + 'graphql/resolvers/mutations',   
    resolve     : function (resolver) {
        allMutationsResolvers={ ...allMutationsResolvers, ...resolver }
    }
});
module.exports = allMutationsResolvers