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

    // fetching flyover times from calling api****
    fetchISSFlyOverTimes(coordinate, (error, result) => {
      if (error) {
        console.log("It didn't worked!", error);
        return;
      }
      //console.log('callback for fetchISSFlyOverTimes called:', result);

      // printing time in readable format..*****
      printPassTime = function(error, result) {
        if (error) {
          console.log("It didn't worked!", error);
          return;
        }
        for (pass of result) {
          const dateTime = new Date(0);
          dateTime.setUTCSeconds(pass.risetime);
          const durationTime = pass.duration;
          console.log(`Next pass at ${dateTime} for ${durationTime} seconds!`)
      }
    };
      printPassTime(null, result);

  });
});
});
