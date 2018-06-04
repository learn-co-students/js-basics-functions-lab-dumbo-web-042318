// Code your solution in this file!
function distanceFromHqInBlocks(endBlock) {
  let blocksTraveled = endBlock - 42;
  return Math.abs(blocksTraveled);
}


function distanceFromHqInFeet(endBlock) {
  let distanceInFeet = (distanceFromHqInBlocks(endBlock) * 264)
  return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let feetTraveled = Math.abs(startBlock - endBlock) * 264;
  return feetTraveled;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  let fare = 0;
  if (distance >= 2500) {
    return 'cannot travel that far';
  } else if (distance < 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
    fare = (distance - 400) * 0.02;
    return fare;
  } else {
    fare = 25;
    return fare;
  }
}
