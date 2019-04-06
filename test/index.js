/* eslint-disable */
const { expect } = require('chai');

const GMR = require('../src/index.js');

describe('merge function test', () => {
  it('Merge result', () => {
    const userResolver = {
      Query: {
        users: (parent, args, context, info) => ['Hello', 'GraphQL'],
      },
      Mutation: {
        createUser: (parent, args, context, info) => { },
      },

      User: {
        books: (parent, args, context, info) => { },
      },
    };

    const bookResolver = {
      Query: {
        books: (parent, args, context, info) => ['Awesome', 'Javascript'],
      },
      Mutation: {
        createBook: (parent, args, context, info) => { },
      },

      Book: {
        postedBy: (parent, args, context, info) => { },
      },
    };

    const mainResolver = GMR.merge([
      userResolver,
      bookResolver,
    ]).toString();

    const result = {
      Query: {
        users: (parent, args, context, info) => ['Hello', 'GraphQL'],
        books: (parent, args, context, info) => ['Awesome', 'Javascript'],
      },
      Mutation: {
        createUser: (parent, args, context, info) => { },
        createBook: (parent, args, context, info) => { },
      },
      User: {
        books: (parent, args, context, info) => { },
      },
      Book: {
        postedBy: (parent, args, context, info) => { },
      },
    }.toString();

    expect(mainResolver).to.equal(result);
  });
});
