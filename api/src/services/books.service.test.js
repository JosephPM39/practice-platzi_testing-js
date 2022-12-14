const BooksService = require('./books.service');
const { generateManyBooks } = require('../fakes/book.fake');

// Fake
const fakeBooks = [
  // Dummy
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

// Spy
const mockGetAll = jest.fn();

// Stub
const MongoLibStub = {
  getAll: mockGetAll,
  create: () => {},
};

// This is form to use Mocks with jest
jest.mock(
  // When the code calls this library
  '../lib/mongo.lib',
  // Impersonate it with MongoLibStub
  () => jest.fn().mockImplementation(
    // Jest prepare the spies in a folder called mocks, so
    // if we want use the spy here, is necesary remplace
    // the mongoLibStub, directly obj here
    () => ({
      getAll: mockGetAll,
      create: () => {},
    }),
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
      // Arrange with fakers books
      const fakeBook = generateManyBooks(20);
      // Using spy
      mockGetAll.mockResolvedValue(fakeBook);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBook.length);
      // Using spy results
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return a list book', async () => {
      // Arrange with fakers books
      const fakeBook = generateManyBooks(2);
      // Using spy
      mockGetAll.mockResolvedValue(fakeBook);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakeBook[0].name);
    });
  });
});
