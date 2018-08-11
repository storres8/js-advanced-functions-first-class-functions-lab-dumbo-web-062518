const returnFirstTwoDrivers = (driversArray) => {
  return driversArray.slice(0,2)
};

const returnLastTwoDrivers = (driversArray) => {
  return driversArray.slice(-2)
};


const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = (integer) => {
  return function(fare){
    return fare * integer;
  }
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driversArray, bringBackDriversFunction) => {
  return bringBackDriversFunction(driversArray);
};
