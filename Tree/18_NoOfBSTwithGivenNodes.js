// No of BST possible with given number of nodes.
// reference: https://www.youtube.com/watch?v=YDf982Lb84o

// Recursive method.
function countTrees(n){
  if(n<=1) {
    return 1;
  } else {
    let sum = 0;
    for(let i = 1; i<=n; i++){
      let leftTree = countTrees(i-1);
      let rightTree = countTrees(n-i);
      sum = sum + (leftTree * rightTree);
    }
    return sum;
  }
}

console.log(countTrees(4));

// Iterative Method. 
// HINT --> Total BST for node 4
//    left      right
//     0          3
//     1          2
//     2          1
//     3          0
    

function countTreeWithIteration(n){
  if(n<=1){
    return 1;
  } else {
    let t = new Array(n+1).fill(0);
    t[0] = t[1] = 1;
    for(let i = 2; i <= n; i++){
      for(let j=0; j <= (i-1); j++){
        t[i] = t[i] + (t[j] * t[i - j - 1])
      }
    }
    return t[n];
  }
}
console.log(countTreeWithIteration(4));
