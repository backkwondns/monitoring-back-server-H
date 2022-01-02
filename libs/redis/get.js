const cursor = require('./connect');

const lastData = async (list) => {
  const value = await cursor.lRange(list, 0, 0);
  return value[0];
};

const data = async (list, from, to) => {
  const value = await cursor.lRange(list, from, to);
  return value;
};

const listLen = async (list) => {
  const len = await cursor.lLen(list);
  return len;
};

const listTrim = (list) => {
  cursor.lTrim(list, 0, 3599);
};

module.exports = {
  lastData,
  data,
  listLen,
  listTrim,
};
