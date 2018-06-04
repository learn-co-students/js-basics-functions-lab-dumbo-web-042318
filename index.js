// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
    //returns the number of blocks given a value
    
    return Math.abs(someValue - 42);
};
  
function distanceFromHqInFeet (someValue) {
    let x = distanceFromHqInBlocks(someValue);
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
    return x * 264;
};

function distanceTravelledInFeet(someValue, otherValue) {
    let x = Math.abs(otherValue - someValue)

    return x * 264
};

function calculatesFarePrice(start, destination) {
    
    let x = distanceTravelledInFeet(start, destination); 

    if (x < 400) {
        return 0;
    } else if (x > 400 && x < 2000) {
        return (x - 400) * 0.02;
    } else if (x > 2000 && x < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    };

};