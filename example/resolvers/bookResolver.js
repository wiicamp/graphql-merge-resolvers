let { books, users } = require('../seeding'); // eslint-disable-line

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    createBook: (parent, args) => {
      const { title, author } = args;

      const id = `b${books.length}`;

      books.push({
        id,
        title,
        author,
      });
    },

    deleteBook: (parent, args) => {
      const { id } = args;

      const book = books.find(e => e.id === id);

      books = books.filter(e => e.id !== id);

      return book;
    },
  },

  Book: {
    author: (parent) => {
      let { author } = parent;

      author = users.find(e => e.id === author);

      return author;
    },
  },
};

module.exports = resolvers;
