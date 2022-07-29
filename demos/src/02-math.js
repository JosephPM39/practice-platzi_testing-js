function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  // To evite errors, this should be uncommented
  if (b === 0) {
    return null;
  }
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  sum,
  multiply,
  divide,
  subtract,
};
