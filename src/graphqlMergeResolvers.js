class GraphqlMergeResolvers {
  static merge(customResolver, rootResolver = {}) {
    const mergedResolver = rootResolver;
    let key;

    if (Array.isArray(customResolver)) {
      customResolver.forEach((resolver) => {
        for (key in resolver) {
          if ({}.hasOwnProperty.call(resolver, key)) {
            mergedResolver[key] = { ...mergedResolver[key], ...resolver[key] };
          }
        }
      });
    } else {
      for (key in customResolver) {
        if ({}.hasOwnProperty.call(customResolver, key)) {
          mergedResolver[key] = { ...mergedResolver[key], ...customResolver[key] };
        }
      }
    }

    return mergedResolver;
  }
}

export default GraphqlMergeResolvers;
