// Find the minimum distance between two numbers

{

  function MinDistance(arr, x, y) {
    if(!x || !y) {
      return -1;
    }

    let pre = -1,
      MinDistance = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === x || arr[i] === y) {
        if(pre === -1 || arr[pre] === arr[i]) {
          pre = i;
        } else {
          MinDistance = Math.min(MinDistance, i - pre);
          pre = i;
        }
      }
    }

    return MinDistance;
  }

  console.log(MinDistance([3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3], 3, 6));
  // 4
}