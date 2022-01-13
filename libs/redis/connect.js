const redis = require('redis');

const client = redis.createClient({
  url: 'redis://10.10.0.10:6379',
  //url:'redis://localhost:6379'
});

client.on('error', (error) => {
  console.error(error);
});

client.connect();

module.exports = client;
