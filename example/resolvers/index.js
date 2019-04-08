const GMR = require('graphql-merge-resolvers');

const bookResolver = require('./bookResolver');
const userResolver = require('./userResolver');

module.exports = GMR.merge([
  userResolver,
  bookResolver,
]);
