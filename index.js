const { fetchMyIp, fetchCoordsByIP } = require('./iss');

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }

//   console.log(`It worked! IP: ${ip}`);
// });

fetchCoordsByIP('70.64.85.3', (error, data) => {

});