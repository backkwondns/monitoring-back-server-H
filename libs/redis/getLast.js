const cursor = require('./connect');

const lastData = async (list) => {
  const value = await cursor.lRange(list, 0, 0);
  return value;
};
module.exports = lastData;
