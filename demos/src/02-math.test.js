const {
  sum, subtract, divide, multiply,
} = require('./02-math');

test('adds 1 + 3 should be 4, and 4+1 should be 5', () => {
  const res = sum(1, 3);
  expect(res).toBe(4);
  expect(sum(4, 1)).toBe(5);
});

test('subtract 1 - 2 should be -1', () => {
  const res = subtract(1, 2);
  expect(res).toBe(-1);
});

// This is an example to show a test failed
test('divide 1/0 should be null, and 4/2 should be 2', () => {
  const res = divide(4, 2);
  expect(res).toBe(2);
  const res2 = divide(1, 0);
  expect(res2).toBeNull();
});

test('multiply 1*2 should be 2', () => {
  const res = multiply(1, 2);
  expect(res).toBe(2);
});
