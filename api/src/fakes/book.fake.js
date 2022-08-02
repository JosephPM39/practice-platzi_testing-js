const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (quantity) => {
  const limit = quantity ?? 10;
  const res = [];
  for (let index = 0; index < limit; index += 1) {
    res.push(generateOneBook());
  }
  return [...res];
};

module.exports = {
  generateOneBook,
  generateManyBooks,
};
