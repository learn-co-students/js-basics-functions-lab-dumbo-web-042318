function distanceFromHqInBlocks (pickup) {
  let blocks;
  if (pickup > 42) {
    blocks = pickup - 42;
  } else {
    blocks = 42 - pickup;
  }
  return blocks;
}


function distanceFromHqInFeet (pickup) {
return distanceFromHqInBlocks(pickup) * 264;
}


function distanceTravelledInFeet(start, destination) {
  let totalDistance;
  if (start > destination) {
    totalDistance = (start - destination) * 264;
  } else {
    totalDistance = (destination - start) * 264;
  }
return totalDistance;
}


function calculatesFarePrice(start,destination) {
  let distance = (distanceTravelledInFeet(start, destination));
  let fare;
    if (distance <= 400) {
      fare = 0;
    } else if ((distance > 400) && (distance < 2000)){
      fare = (distance - 400) * .02;
    } else if ((distance > 2000) && (distance < 2500)) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
return fare;
}
