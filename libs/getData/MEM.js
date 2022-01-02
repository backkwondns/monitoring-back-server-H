const si = require('systeminformation');

const MEM = () => {
  return si.mem();
};

module.exports = MEM;
