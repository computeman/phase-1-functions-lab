function distanceFromHqInBlocks(pickuplocation) {
  return Math.abs(pickuplocation - 42);
}
function distanceFromHqInFeet(blocks) {
  let feet = distanceFromHqInBlocks(blocks);
  return feet * 264;
}
function distanceTravelledInFeet(start, destination) {
  let distanceinblocks = Math.abs(destination - start);
  return distanceinblocks * 264;
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
        return "cannot travel that far";
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400){
        return (distance - 400) * 0.02;
    } else {
        return 0;
    }
}
