declare module "graphql-merge-resolvers" {
  class GMR {
    merge(customResolvers: any, rootResolver: object): any
  }

  namespace GMR { }

  export default GMR;
}
