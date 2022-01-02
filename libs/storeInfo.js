const infoCollection = require('./aggregateInfo');
const lpushStore = require('./redis/set');
const { upperFirstLetter } = require('./common');

const storeInfo = async () => {
  const infos = await infoCollection();
  // Store CPU infos
  lpushStore('CPU_Avg', infos['cpu']['avg'].toString());
  infos['cpu']['cores'].forEach((core, index) => lpushStore(`CPU_Core${index}`, core.toString()));

  //Store MEM infos
  Object.keys(infos['mem']).every(((value, index) => {
    if (index >= 7) return false;
    console.log(`MEM_${upperFirstLetter(value)}`);
    lpushStore(`MEM_${upperFirstLetter(value)}`, (Math.ceil(infos['mem'][value] / 1000000)).toString());
    return true;
  }));

  //Store fan infos
  lpushStore('FAN_Speed', infos['fan'].toString());

  //Store temp infos
  Object.keys(infos['temp']).forEach((value) => {
    lpushStore(value, infos['temp'][value].toString());
  });
};

module.exports = storeInfo;
