declare module "graphql-merge-resolvers" {
  class GMR {
    merge(customResolvers: any, rootResolver: object): object
  }

  namespace GMR { }

  export default GMR;
}
