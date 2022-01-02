const fs = require('fs');

getDeviceData = () => {
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
    tempObject[`temp${typeName.split('-')[0]}`] = Number(typeTemp) / 1000;
  });
  tempObject['timestamp'] = Date.now();
  return tempObject;
};

module.exports = getDeviceData;
