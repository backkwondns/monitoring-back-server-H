const { lastData, data, listLen, listTrim } = require('./redis/get');
const listOfStore = require('../listOfStore');

const lastFromDB = async () => {
  let allInfo = {};
  for (const value of listOfStore) {
    allInfo[value] = await lastData(value).then((value1) => value1);
  }
  return allInfo;
};

const multiFromDB = async () => {
  let multiInfo = {};
  for (const value of listOfStore) {
    multiInfo[value] = await data(value, 0, 29).then((value1) => value1);
  }
  return multiInfo;
};

const clearOldDB = async () => {
  for (const value of listOfStore) {
    if ((await listLen(value)) > 300) listTrim(value);
  }
};

module.exports = {
  lastFromDB,
  multiFromDB,
  clearOldDB,
};
