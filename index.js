// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value

  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet (someValue) {
   return distanceFromHqInBlocks(someValue) * 264 ;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (staringValue, endingValue){
  return Math.abs(staringValue - endingValue) * 264 ;
}

function calculatesFarePrice(staringValue, endingValue){
  let distance = distanceTravelledInFeet(staringValue, endingValue);
  if (distance <= 400) {
      return 0
  } else if (distance > 400 && distance < 2000 ) {
    return (distance - 400) * (.02)
  } else if (distance > 2000 && distance < 2500 ){
    return 25
  } else {
    return 'cannot travel that far'
  }

}
