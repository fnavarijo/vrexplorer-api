const books = [
  {
    title: 'Somethign fancy',
    author: 'Mr. Mario',
  },
  {
    title: 'Nothing dummy',
    author: 'The dummy',
  }
];

export const resolvers = {
  Query: {
    books: (): Array<Dictionary> => books,
  }
};