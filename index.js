// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  let distance;

  if (block >= 42){
    distance = block - 42
    return distance;
  } else {
    distance = 42 - block
    return distance;
    }
}


function distanceFromHqInFeet(block) {

  let distance = distanceFromHqInBlocks(block);
  let result = distance * 264

  return result;
}


function distanceTravelledInFeet(startBlock, endBlock) {
  let result;

  if (startBlock > endBlock) {
    result = startBlock - endBlock
  } else {
    result = endBlock - startBlock
  }

  let feet = result * 264;

  return feet;
}




// function calculatesFarePrice(start, destination) {
//   let feet = distanceTravelledInFeet(start, destination);
//   let cost;
//
//     switch (feet) {
//       case < 400:
//       cost = 0;
//       break;
//
//       case > 400 && <= 2000:
//       cost = (feet - 400) * 0.02;
//       break;
//
//       case > 2000 && <= 2500:
//       cost = 25.00;
//       break;
//
//       case > 2500:
//       cost = 'cannot travel that far'
//       break;
//     }
//
//   return cost;
// }


function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  let cost;

    if (feet <= 400) {
    cost = 0;
    } else if (feet > 400 && feet <= 2000) {
      cost = (feet - 400) * 0.02
    } else if (feet > 2000 && feet <= 2500) {
      cost = 25.00
    } else if (feet > 2500) {
      cost = 'cannot travel that far'
    }

  return cost;
}
