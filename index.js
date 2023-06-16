// Code your solution in this file!
const names = ["Sassy", "Sasha", "Story", "Sierra"]
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
};
// // console.log(returnFirstTwoDrivers(names))

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyFare) {
    return function(fare){
        return multiplyFare * fare;
    };
};
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn){
        return driversToReturn(drivers);
    };
