// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let distance = Math.abs(42 - street);
  return distance
}

function distanceFromHqInFeet(street) {
  let blocks = distanceFromHqInBlocks(street);
  let feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(pickup, destination) {
  let blocks = Math.abs(pickup - destination);
  let distance = blocks * 264
  return distance;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let fare;
  if (distance < 400) {fare = 0} else
  if (distance < 2000) {fare = (distance - 400) * 0.02} else
  if (distance <= 2500) {fare = 25} else
  if (distance > 2500) {return 'cannot travel that far'};
  return fare;
}
