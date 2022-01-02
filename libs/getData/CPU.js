// GHz
const si = require('systeminformation');

const CPU = () => {
  return si.cpuCurrentSpeed();
};

module.exports = CPU;
