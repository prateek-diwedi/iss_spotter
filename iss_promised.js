const request = require('request-promise-native');

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request ('https://ipvigilante.com/' + ip);
}

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).data;
  console.log({latitude, longitude})
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
  return request (url);
}

const printPassTime = function(body) {
  for (pass of body) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const durationTime = pass.duration;
    console.log(`Next pass at ${dateTime} for ${durationTime} seconds!`)
}
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
  const { response } = JSON.parse(data);
  return response;
  });
}

module.exports = { nextISSTimesForMyLocation, printPassTime };