// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
  return Math.abs(num2 - num1) * 264;
}

function calculatesFarePrice(num1, num2) {
  let feet = distanceTravelledInFeet(num1, num2)
  if(feet <= 400) {
    return 0;
  } else if(feet > 400 && feet < 2000) {
    return (feet - 400) * .02;
  } else if(feet > 2000 && feet < 2500) {
    return 25;
  }else {
    return 'cannot travel that far';
  }
}
