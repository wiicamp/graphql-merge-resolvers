const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: String!
    title: String!
    author: User!
  }

  type User {
    id: String!
    name: String!
    books: [Book]
  }

  type Query {
    books: [Book]
    users: [User]
  }

  type Mutation {
    createBook(title: String!, author: String!): Book
    deleteBook(id: String): Book
  }
`;

module.exports = typeDefs;
