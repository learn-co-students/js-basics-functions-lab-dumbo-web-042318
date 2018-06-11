// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  const hq = 42;

  return Math.abs(pickup - hq);
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination) {
  blocks = Math.abs(destination - start);
  return blocks * 264;
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination);

  switch (true) {
    case distance <= 400:
      return 0;
    case distance > 400 && distance <= 2000:
      return (distance - 400) * 0.02;
    case distance > 2000 && distance <= 2500:
      return 25;
    case distance > 2500:
      return "cannot travel that far";
  }
}
