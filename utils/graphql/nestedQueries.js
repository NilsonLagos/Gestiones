
const nestedQueries = require('require-all')({
    dirname :  require('../rootRoute') + 'graphql/resolvers/nested',
    map     : function (name, path) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
  });

  module.exports = nestedQueries