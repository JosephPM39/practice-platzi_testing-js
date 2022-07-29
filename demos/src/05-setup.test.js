describe('Set', () => {
  beforeAll(() => {
    console.log('before all, make ...');
    // Example, up a db
  });

  afterAll(() => {
    console.log('after all, make ...');
    // Example, down db
  });

  beforeEach(() => {
    console.log('before each test, make ...');
    // Example, clean cache
  });

  afterEach(() => {
    console.log('after each test, make ...');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(1 + 1).toBe(2);
  });

  describe('other group', () => {
    beforeAll(() => {
      console.log('before all, in this other group, make ...');
    // Example, up a db
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(1 + 1).toBe(2);
    });
  });
});
