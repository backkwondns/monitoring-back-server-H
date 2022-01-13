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
  cursor.lTrim(list, 0, 10799);
};

const hashGet = async (hash) => {
  const result = await cursor.hGet(hash, 'password');
  return result;
};

const hashVal = async (hash) => {
  const result = await cursor.hGetAll(hash);
  return result;
};

const zSetGet = async (set, from, to) => {
  const result = await cursor.zRange(set, from, to, { BY: 'SCORE' });
  return result;
};

module.exports = {
  lastData,
  data,
  listLen,
  listTrim,
  hashGet,
  hashVal,
  zSetGet,
};
