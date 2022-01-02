const redis = require('redis');

const client = redis.createClient({
  host: 'localhost',
  port: 6379,
});

client.on('error', (error) => {
  console.error(error);
});

client.connect();

module.exports = client;
