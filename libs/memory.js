const si = require('systeminformation');

const memory = () => {
  return si.mem();
};

module.exports = memory;
