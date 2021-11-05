const { fetchMyIP, fetchCoordsByIP, fetchISSFlyoverTimes } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyoverTimes)
  .then(body => console.log(body));