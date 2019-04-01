class GraphqlMergeResolvers {
  static merge(customResolver, rootResolver = {}) {
    const mergedResolver = rootResolver;

    if (Array.isArray(customResolver)) {
      customResolver.forEach((resolver) => {
        for (let key in resolver) {
          mergedResolver[key] = { ...mergedResolver[key], ...resolver[key] };
        }
      });
    } else {
      for (let key in customResolver) {
        mergedResolver[key] = { ...mergedResolver[key], ...customResolver[key] };
      }
    }

    return mergedResolver;
  }
}

export default GraphqlMergeResolvers;
