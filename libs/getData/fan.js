const fs = require('fs');

const dirString = '/sys/devices/pwm-fan';

const fan = () => {
  return Number(fs.readFileSync(`${dirString}/target_pwm`, 'utf-8'));
};

module.exports = fan;
