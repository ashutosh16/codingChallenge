// Amazon
function _findDistenceBetween(a,b){
  return Math.sqrt(((b[1] - a[1]) * (b[1] - a[1])) + (((b[0] - a[0]) * (b[0] - a[0]))));
}
function findCloseDestination(destinationList, noOfDestinations){
  let selectedDestinationList = [],
    visitedDestination = Array(destinationList.length),
    distenceArray = Array(destinationList.length).fill(Number.MAX_SAFE_INTEGER),
    current = [0,0];
  while (selectedDestinationList.length !== noOfDestinations){
    let minDistence = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < destinationList.length; i++){
      let distence = _findDistenceBetween(current, destinationList[i]);
      if (visitedDestination[i] !== 1 && distence < minDistence) {
        minDistence = distence;
        minIndex = i;
      }
    }
    console.log(`From ${current} To ${destinationList[minIndex]} -> ${minDistence}`);
    visitedDestination[minIndex] = 1;
    current = destinationList[minIndex];
    selectedDestinationList.push(current);
  }

  return selectedDestinationList;
}

let destinations = [[3, 6], [2, 4], [5, 3], [2, 7], [1, 8], [7, 9]];
findCloseDestination(destinations, 3);