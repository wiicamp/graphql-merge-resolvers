# graphql-merge-resolvers
Lightweight and powerful package makes easy to modularizing and merge your resolvers.

## Table of Contents
- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Features
- Easy to use
- Pure javascript
- Small package without dependencies
- ES6 classes

## Install
```sh
npm i --save graphql-merge-resolvers
```
or
```sh
yarn add graphql-merge-resolvers
```

## Usage
### Basic 
```javascript
const GMR from 'graphql-merge-resolvers'; // Import this module

// Demo user resolver
const userResolver = {
  Query: { 
    users: (parent, args, context, info) => ['Hello', 'GraphQL'],
  },
  Mutation: {
    createUser: (parent, args, context, info) => {},
  },

  User: {
    books: (parent, args, context, info) => {},
  }
}

// Demo book resolver
const bookResolver = {
  Query: { 
    books: (parent, args, context, info) => ['Awesome', 'Javascript'],
  },
  Mutation: {
    createBook: (parent, args, context, info) => {},
  },

  Book: {
    postedBy: (parent, args, context, info) => {},
  }
}

// Merge time!!!
const mainResolver = GMR.merge([
  userResolver,
  bookResolver,
]);

console.log(mainResolver);
```

### Now we have new resolver
```javascript
// console.log(mainResolver);
{
  Query: {
    users: (parent, args, context, info) => ['Hello', 'GraphQL'],
    books: (parent, args, context, info) => ['Awesome', 'Javascript'],
  },
  Mutation: {
    createUser: (parent, args, context, info) => {},
    createBook: (parent, args, context, info) => {},
  },
  User: {
    books: (parent, args, context, info) => {},
  },
  Book: {
    postedBy: (parent, args, context, info) => {},
  },
}
```

> To get started with `graphql-merge-resolvers`, you can refer to this [example](https://github.com/havinhthai/graphql-apollo-prisma-example).

### API
#### `GMR`
#### `merge(customResolvers: object or array, rootResolver: object): object`
| Args                         | Type                                                            | Default | Description                                                                                                                                                                                                                                              |
| --------------------------- | --------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customResolvers`                  | `Object` or `Array` | `undefined`  | Resolver or list of your resolvers want to merge. **Required**                                              |
| `rootResolver`                     | Object              | `{}`         | Root resolver (options)  |
     

## License
`graphql-merge-resolvers` is released under the MIT license. See [LICENSE](LICENSE) for details.  
  
Any question or support will welcome.
