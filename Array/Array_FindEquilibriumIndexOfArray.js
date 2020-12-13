// Find equilibrium index of an array
// Equilibrium index of an array is an index such that the sum of elements at lower indexes
// is equal to the sum of elements at higher indexes.
// Input : A[] = {-7, 1, 5, 2, -4, 3, 0}
// Output : 3
// 3 is an equilibrium index, because:
// A[0] + A[1] + A[2]  =  A[4] + A[5] + A[6]
// Time Complexity O(n)

{
  function findEquilibriumIndex(a){
    let leftSum = [0],
      rightSum = 0,
      equilibriumIndex = [];
    for(let i = 1; i < a.length; i++){
      leftSum[i] = leftSum[i-1] + a[i-1];
    }
    
    (leftSum[a.length - 1] === 0) ? equilibriumIndex.push(a.length-1) : null;

    for (let i = a.length -2; i >= 0; i--) {
      rightSum = rightSum + a[i + 1];
      if(rightSum === leftSum[i]){
        equilibriumIndex.push(i);
      }
    }
    return equilibriumIndex;
  }


  console.log(findEquilibriumIndex([0,-3,5,-4,-2,3,1,0]));
}
