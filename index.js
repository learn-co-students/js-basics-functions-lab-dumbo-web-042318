function distanceFromHqInBlocks(street) {
   
    const hqStreet = 42;
    if (street > hqStreet) {
        return street - hqStreet;
    } else if (street < hqStreet) {
        return hqStreet - street;
    }

}

function blockToFeet(block) {
    return block * 264;
}

function distanceFromHqInFeet(street) {
    let blockDistance;
    const hqStreet = 42
    if (street > hqStreet) {
        blockDistance =  street - hqStreet;
        return blockToFeet(blockDistance)
    } else if (street < hqStreet) {
        blockDistance = hqStreet - street;
        return blockToFeet(blockDistance)
    }
}

function distanceTravelledInFeet(start, end) {
    
    let blockDistance;
    if (start > end) {
        blockDistance = start - end;
        return blockToFeet(blockDistance);
    } else {
        blockDistance = end - start;
        return blockToFeet(blockDistance);
    }

}

function calculatesFarePrice(start, end) {

    const footDistance = distanceTravelledInFeet(start, end);
    if (footDistance < 400) {
        return 0;
    } else if (footDistance > 400 && footDistance < 2000) {
        return (footDistance - 400) * 0.02;
    } else if (footDistance > 2000) {
        if (footDistance > 2500) {
            return 'cannot travel that far';
        }
        return 25;
    }

}