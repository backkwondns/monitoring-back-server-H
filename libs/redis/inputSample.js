const cursor = require('./connect');

const storeData = (key, value) => {
  cursor.set(key, value);
};

module.exports = storeData
