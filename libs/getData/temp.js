const fs = require('fs');
const { upperFirstLetter } = require('../common');

const temp = () => {
  let tempObject = {};
  const thermalZoneList = [0, 1, 2, 3, 5];
  const dirString = '/sys/class/thermal';

  thermalZoneList.forEach((zoneNumber) => {
    const typeName =
      fs.readFileSync(`${dirString}/thermal_zone${zoneNumber}/type`,
        'utf-8');
    const typeTemp =
      fs.readFileSync(`${dirString}/thermal_zone${zoneNumber}/temp`,
        'utf-8');
    tempObject[`TEMP_${upperFirstLetter(typeName.split('-')[0])}`] = Number(typeTemp) / 1000;
  });
  return tempObject;
};

module.exports = temp;
