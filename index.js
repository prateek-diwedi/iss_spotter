// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  //calling co-ordinates

  fetchCoordsByIP(ip ,(error, coordinate) => {
    if (error) {
      console.log("It didn't worked!", error);
      return;
    }
  
    console.log('The Co- ordinates: ', coordinate);
    fetchISSFlyOverTimes(coordinate, (result) => {
      console.log('callback for fetchISSFlyOverTimes called:', result);
    });
  });
});



