const CPU = require('./getData/CPU');
const MEM = require('./getData/MEM');
const fan = require('./getData/fan');
const temp = require('./getData/temp');

const infoCollection = async () => {
  return { cpu:await CPU(),mem:await MEM(), fan: fan(), temp: temp() };
};

module.exports = infoCollection;
