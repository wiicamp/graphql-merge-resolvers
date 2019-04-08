const { books, users } = require('../seeding');

const resolvers = {
  Query: {
    users: () => users,
  },

  User: {
    books: (parent) => {
      const { id } = parent;

      const userBooks = books.filter(e => e.author === id);

      return userBooks;
    },
  },
};

module.exports = resolvers;
