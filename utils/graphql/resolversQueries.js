let allQueriesResolvers = {}
require('require-all')({
    dirname     :  require('../rootRoute') + 'graphql/resolvers/queries',   
    resolve     : function (resolver) {
        allQueriesResolvers={ ...allQueriesResolvers, ...resolver }
    }
});
module.exports = allQueriesResolvers