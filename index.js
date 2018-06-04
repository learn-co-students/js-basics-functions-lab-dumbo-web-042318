// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42)
};

function distanceFromHqInFeet(pickupLocation) {
  return (distanceFromHqInBlocks(pickupLocation) * 264)
};

function distanceTravelledInFeet(beginningBlock, destinationBlock) {
  return (Math.abs(beginningBlock - destinationBlock) * 264)
};

function calculatesFarePrice(beginningBlock, destinationBlock) {
   let feet = distanceTravelledInFeet(beginningBlock, destinationBlock);
   return costOfDistanceTravelled(feet);
};

function costOfDistanceTravelled(distance) {
  if (distance < 400) {
    return 0
  } else if (distance >= 400 && distance <= 2000) {
    distance -= 400
    return distance * 0.02
  } else if (distance > 2500) {
    return 'cannot travel that far'
  } else {
    return 25
  }
};
