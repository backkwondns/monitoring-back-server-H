const cursor = require('./connect');

const lastData = async (list) => {
  const value = await cursor.lRange(list, 0, 0);
  return value[0];
};

const data = async (list, from, to) => {
  const value = await cursor.lRange(list, from, to)
  return value
}

module.exports = {
  lastData,
  data
}
