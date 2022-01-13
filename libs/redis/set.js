const cursor = require('./connect');
const bcrypt = require('bcryptjs');
const lpushStore = (key, value) => {
  cursor.lPush(key, value);
};

const listOfAll = [
  'CPU_Avg',
  'CPU_Core0',
  'CPU_Core1',
  'CPU_Core2',
  'CPU_Core3',
  'MEM_Total',
  'MEM_Free',
  'MEM_Used',
  'MEM_Active',
  'MEM_Available',
  'MEM_Buffers',
  'MEM_Cached',
  'FAN_Speed',
  'TEMP_AO',
  'TEMP_CPU',
  'TEMP_GPU',
  'TEMP_PLL',
  'TEMP_Thermal',
];

const regist = async (USERNAME, PASSWORD) => {
  const saltPasswd = await bcrypt.genSalt(10);
  const securePasswd = await bcrypt.hash(PASSWORD, saltPasswd);

  cursor.hSet(USERNAME, 'password', securePasswd);
  cursor.sendCommand([
    'hset',
    USERNAME,
    'CPU_Avg',
    '1',
    'TEMP_AO',
    '1',
    'CPU_Core0',
    '1',
    'CPU_Core1',
    '1',
    'CPU_Core2',
    '1',
    'CPU_Core3',
    '1',
    'MEM_Total',
    '1',
    'MEM_Free',
    '1',
    'MEM_Used',
    '1',
    'MEM_Active',
    '1',
    'MEM_Available',
    '1',
    'MEM_Buffers',
    '1',
    'MEM_Cached',
    '1',
    'FAN_Speed',
    '1',
    'TEMP_AO',
    '1',
    'TEMP_CPU',
    '1',
    'TEMP_GPU',
    '1',
    'TEMP_PLL',
    '1',
    'TEMP_Thermal',
    '1',
  ]);
  listOfAll.map((value, index) => {
    cursor.sendCommand(['zAdd', `${USERNAME}_LIST`, index.toString(), value]);
  });
};

const hSetSelected = async (hash, key, value) => {
  await cursor.hSet(hash, key, value);
};

const zAddList = async (sortedSet, list) => {
  await cursor.sendCommand(['zadd', sortedSet, ...list.map((value) => value.toString())]);
};

module.exports = { lpushStore, regist, hSetSelected, zAddList };
