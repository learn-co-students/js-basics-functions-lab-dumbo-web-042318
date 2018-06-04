

function distanceFromHqInBlocks(pickup){
  // Calculates distance from 42nd St in blocks
  let num_blocks = Math.abs(pickup - 42);;

  return num_blocks;
}


function distanceFromHqInFeet(pickup){
  // Calculates distance from 42nd St in feet
  // 1 block = 264 ft
  let feet = (Math.abs(pickup - 42)) * 264;

  return feet
}

function distanceTravelledInFeet(pickup, drop){
  let distance = (Math.abs(pickup - drop)) * 264;

  return distance
}

function calculatesFarePrice(pickup, drop){
  let price = 0;

  feet = distanceTravelledInFeet(pickup, drop)
  if (feet <= 400) {
    //free
    return price;
  } else if (feet > 400 && feet <= 2000) {
    // feet * 2 cents
    feet = feet - 400;
    return feet * 0.02
  } else if (feet > 2000 && feet < 2500){
    // flat fee
    return 25
  } else {
    return 'cannot travel that far'
  }
}
