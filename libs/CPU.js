// GHz
const { cpus } = require('os');
const si = require('systeminformation');

const CPU = () => {
  return si.cpuCurrentSpeed();
};

module.exports = CPU;
