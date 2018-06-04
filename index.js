// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance-42);
}

function distanceFromHqInFeet(distance){
    return Math.abs((distance-42)*264);
}

function distanceTravelledInFeet(distOne, distTwo){
  return Math.abs((distOne-distTwo)*264)
}

function calculatesFarePrice(start, destination){
  let dist = distanceTravelledInFeet(start, destination)
  console.log(dist)
  switch(true) {
    case  (dist >= 0 && dist <= 400):
        return 0
        break;
    case (dist > 400 && dist <= 2000):
        return .02*(dist-400)
        break;
    case 2000 < dist && dist < 2500:
        return 25
        break;
    case 2500 <= dist:
        return 'cannot travel that far'
        break;
      }
}
