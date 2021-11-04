const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

let fetchMyIp = function(callback) {

  request.get('https://api.ipify.org?format=json', (error, response, body) => {
    
    // error can be set if invalid domain, user is offline, etc.
    if (error) { return callback(error, null); }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // if we get here, we got the right data.
    let ip = JSON.parse(body).ip;
    
    callback(null, ip);
  });

};

let fetchCoordsByIP = function(ip, callback) {
  request.get(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching Coords. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    
    const { longitude, latitude } = JSON.parse(body);
    console.log({ longitude, latitude });
  });
};

module.exports = { fetchMyIp, fetchCoordsByIP };