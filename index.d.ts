declare module "graphql-merge-resolvers" {
  class GMR {
    public static merge(
      customResolvers: object | [],
      rootResolver?: object,
    ): object;
  }

  namespace GMR { }

  export default GMR;
}
