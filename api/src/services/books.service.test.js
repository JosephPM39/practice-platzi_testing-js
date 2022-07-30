const BooksService = require('./books.service');

// Fake
const fakeBooks = [
  // Dummy
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

// Stub
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

// This is form to use Mocks with jest
jest.mock(
  // When the code calls this library
  '../lib/mongo.lib',
  // Impersonate it with MongoLibStub
  () => jest.fn().mockImplementation(
    () => MongoLibStub,
  ),
);

describe('Test for BooksService', () => {
  // Arrange
  let service;
  beforeEach(() => {
    service = new BooksService();
    // This function is very useful to use new info
    // in each test
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list book', async () => {
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });

    test('Should return a list book', async () => {
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
