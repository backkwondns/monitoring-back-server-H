const { lastData } = require('./redis/get');
const listOfStore = require('../listOfStore');

const fromDB = async () => {
  let allInfo = {};
  for (const value of listOfStore) {
    allInfo[value] = await lastData(value).then(value1 => (value1));
  }
  return allInfo;
};

module.exports = fromDB;
