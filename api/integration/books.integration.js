const mockGetAll = jest.fn();

const request = require('supertest');
const createApp = require('../src/app');

const { generateManyBooks } = require('../src/fakes/book.fake');

jest.mock(
  '../src/lib/mongo.lib',
  () => jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  })),
);

describe('Test for books endpoint with mocks and spies, and fakes', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // Assert
          console.log(body);
          expect(body.length).toEqual(3);
        });
    });
  });
});