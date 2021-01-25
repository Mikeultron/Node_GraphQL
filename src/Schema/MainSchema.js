const { GraphQLSchema } = require("graphql");
const { RootMutationType } = require("../Types/RootMutationType");
const { RootQueryType } = require("../Types/RootQueryType");

exports.MainSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
