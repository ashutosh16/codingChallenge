// Count Number of Binary Search Tree Possible given n keys Dynamic Programming.

{
  function CountNoOfTreePossible(n) {
    debugger;
    let total = Array(n+1).fill(0);
    total[0] = 1;
    total[1] = 1;
    for(let i = 2; i <= n; i++) {
      for(let j = 0; j < i; j++) {
        total[i] += total[j] * total[i-j-1];
      }
    }
    return total[n];
  }
  var count = CountNoOfTreePossible(5);
  console.log(count);
}