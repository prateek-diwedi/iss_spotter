const { nextISSTimesForMyLocation } = require('./iss_promised');

const { printPassTime } = require('./iss_promised');


nextISSTimesForMyLocation()
.then((passTime) => {
  printPassTime(passTime);
})
.catch((error) => {
  console.log("It didn't work: ", error.message)
})