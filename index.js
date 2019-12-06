// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  //calling co-ordinates

  fetchCoordsByIP(ip ,(error, latitude, longitude) => {
    if (error) {
      console.log("It didn't worked!", error);
      return;
    }
  
    console.log('The Co- ordinates: ' + latitude + '\n' + 'Longitude: ' + longitude);
  });
});



