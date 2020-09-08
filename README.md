# @wiicamp/graphql-merge-resolvers
[![NPM version](https://img.shields.io/npm/v/graphql-merge-resolvers.svg)](https://img.shields.io/npm/v/graphql-merge-resolvers.svg)
[![Minified size](https://img.shields.io/bundlephobia/min/graphql-merge-resolvers.svg)](https://img.shields.io/bundlephobia/min/graphql-merge-resolvers.svg)
[![License: MIT](https://img.shields.io/npm/l/graphql-merge-resolvers.svg)](https://opensource.org/licenses/MIT)
[![TravisCI](https://travis-ci.org/havinhthai/graphql-merge-resolvers.svg?branch=master)](https://travis-ci.org/havinhthai/graphql-merge-resolvers.svg?branch=master)

Lightweight and powerful package makes easy to modularizing and merge your resolvers.

## Table of Contents
- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribution](#contribution)
- [License](#license)

## Features
- Easy to use
- Pure javascript
- Lightweight package without dependencies
- ES6 classes

## Install
```sh
npm i --save @wiicamp/graphql-merge-resolvers
```
or
```sh
yarn add @wiicamp/graphql-merge-resolvers
```

## Usage
### Basic 
```javascript
const GMR = require('@wiicamp/graphql-merge-resolvers'); // Import module

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

> To get started with `graphql-merge-resolvers`, you can refer to this [example](example).

## API
### `GMR`
#### `merge(customResolvers: object or array, rootResolver: object): object`
| Args                         | Type                                                            | Default | Description                                                                                                                                                                                                                                              |
| --------------------------- | --------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customResolvers`                  | `Object` or `Array` | `undefined`  | Resolver or list of your resolvers want to merge. **Required**                                              |
| `rootResolver`                     | Object              | `{}`         | Root resolver (options)  |
     

## Contribution
Contribution are always **welcome and recommended**! Here is how:

- Fork the repository ([here is the guide](https://help.github.com/articles/fork-a-repo/)).
- Clone to your machine ```git clone https://github.com/YOUR_USERNAME/graphql-merge-resolvers.git```
- Make your changes
- Create a pull request


## License
`@wiicamp/graphql-merge-resolvers` is released under the MIT license. See [LICENSE](./LICENSE) for details.  
  
Any question or support will welcome.
