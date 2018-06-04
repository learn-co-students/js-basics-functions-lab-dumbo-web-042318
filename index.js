// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock) {

  if(currentBlock > 42) {
      return currentBlock - 42;
  } else {
      return 42 - currentBlock
  }
}

function distanceFromHqInFeet(blockNumber) {
  let numberOfBlocks = distanceFromHqInBlocks(blockNumber);

  let result = numberOfBlocks * 264;

    return result;
}

function distanceTravelledInFeet(start, end) {
  if(start > end) {
    let difference = start - end;
    return difference * 264;
  } else {
    let output = end - start;
    return output * 264;
  }
}

function calculatesFarePrice(start, destination) {

  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance < 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
