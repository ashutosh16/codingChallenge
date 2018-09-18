// Find equilibrium index of an array
// Time Complexity O(n)
{
  function findEquilibriumIndex(a){
    let leftSum = [0],
      rightSum = Array(a.length),
      equilibriumIndex = [];
    for(let i = 1; i < a.length; i++){
      leftSum[i] = leftSum[i-1] + a[i-1];
    }
    rightSum[a.length -1] = 0;
    (rightSum[a.length - 1] === leftSum[a.length - 1]) ? equilibriumIndex.push(a.length-1) : null;

    for (let i = a.length -2; i >= 0; i--) {
      rightSum[i] = rightSum[i + 1] + a[i + 1];
      if(rightSum[i] === leftSum[i]){
        equilibriumIndex.push(i);
      }
    }
    return equilibriumIndex;
  }


  console.log(findEquilibriumIndex([0,-3,5,-4,-2,3,1,0]));
}