# graphql-merge-resolvers
Small package makes easy to merge resolvers of GraphQL.

## Features
- Pure javascript
- Small package without dependencies
- Easy to use
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
const GMR from 'graphql-merge-resolvers';

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


const mainResolver = GMR.merge([
  userResolver,
  bookResolver,
]);

console.log(mainResolver);
```

Result
```javascript
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
