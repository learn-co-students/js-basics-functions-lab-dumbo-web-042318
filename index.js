// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, end) {
  //The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
  
  let dist = distanceTravelledInFeet(start, end);
  
  switch(true) {
    case dist <= 400: 
      return 0;
    case dist <= 2000: 
      return (dist - 400) * .02;
    case dist > 2000 && dist < 2500:
      return 25;
    default: 
      return "cannot travel that far";
  } 
}
