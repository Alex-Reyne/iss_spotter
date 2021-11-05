const request = require('request-promise-native');

const fetchMyIP = function() {
  return request(`https://api.ipify.org?format=json`)
};

const fetchCoordsByIP = function(body) {
  let ip = JSON.parse(body).ip
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyoverTimes = function(body) {
  const { longitude, latitude } = JSON.parse(body);
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyoverTimes };