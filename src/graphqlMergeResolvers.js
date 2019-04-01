class GraphqlMergeResolvers {
  static merge(customResolver, rootResolver = {}) {
    const mergedResolver = rootResolver;
    let key;

    if (Array.isArray(customResolver)) {
      customResolver.forEach((resolver) => {
        for (key in resolver) {
          mergedResolver[key] = { ...mergedResolver[key], ...resolver[key] };
        }
      });
    } else {
      for (key in customResolver) {
        mergedResolver[key] = { ...mergedResolver[key], ...customResolver[key] };
      }
    }

    return mergedResolver;
  }
}

export default GraphqlMergeResolvers;
