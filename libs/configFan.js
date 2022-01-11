const fs = require('fs');

const dirString = '/sys/devices/pwm-fan';

const configFan = (value) => {
	fs.writeFileSync(`${dirString}/target_pwm`, value)
}

module.exports = {configFan}
