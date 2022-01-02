const cursor = require('./connect');

const lpushStore = (key, value) => {
  cursor.lPush(key, value);
};

module.exports = lpushStore;
