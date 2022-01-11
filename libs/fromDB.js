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
  let tmpInfo = {};
  let multiInfo = [];

  for (const value of listOfStore) {
    tmpInfo[value] = await data(value, 0, 29);
  }
  for (let index of Array(30).keys()) {
    let tmp1Info = {};
    for (let key of Object.keys(tmpInfo)) {
      tmp1Info[key] = tmpInfo[key][index];
    }
    multiInfo.push(tmp1Info);
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
