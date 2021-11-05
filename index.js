const { fetchMyIp, fetchCoordsByIP, fetchISSFlyoverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }

//   console.log(`It worked! IP: ${ip}`);
// });

// fetchCoordsByIP('70.64.85.3', (error, data) => {
//   if (error) {
//     console.log("it didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned coordinates: ', data);

// });


// fetchISSFlyoverTimes({ longitude: -106.7297, latitude: 52.1119 }, (error, data) => {

//   if (error) {
//     console.log("it didn't work!", error);
//     return;
//   }

//   return console.log(data);
// });

const printPassTimes = function(passTimes) {

  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration
    console.log(`Next pass @ ${datetime} for ${duration} seconds!`);
  }

};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("it didn't work!", error);
    return;
  }
  console.log(passTimes)

  printPassTimes(passTimes);

});