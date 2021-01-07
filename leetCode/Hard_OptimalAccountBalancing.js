// A group of friends went on holiday and sometimes lent each other money. For example, Alice paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride. We can model each transaction as a tuple (x, y, z) which means person x gave person y $z. Assuming Alice, Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), the transactions can be represented as [[0, 1, 10], [2, 0, 5]].

// Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.

// Note:

// A transaction will be given as a tuple (x, y, z). Note that x ≠ y and z > 0.
// Person's IDs may not be linear, e.g. we could have the persons 0, 1, 2 or we could also have the persons 0, 2, 6.

// Example 1:
// Input:
// [[0,1,10], [2,0,5]]
// Output:
// 2
// Explanation:
// Person #0 gave person #1 $10.
// Person #2 gave person #0 $5.

// Two transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.

// Example 2:
// Input:
// [[0,1,10], [1,0,1], [1,2,5], [2,0,5]]
// Output:
// 1

// Explanation:
// Person #0 gave person #1 $10.
// Person #1 gave person #0 $1.
// Person #1 gave person #2 $5.
// Person #2 gave person #0 $5.

// Therefore, person #1 only need to give person #0 $4, and all debt is settled.
/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
    let settleMap = {};
    transactions.forEach(t => {
      let p1 = t[0], p2 = t[1], amt = t[2];
      //p2 will return to p1, Lets check is anything pendding return from p1 to p2
      if(settleMap[p1] && settleMap[p1][p2]) {
        if(settleMap[p1][p2] > amt) {
          settleMap[p1][p2] = settleMap[p1][p2] - amt; 
        } else {
          settleMap[p2][p1] = amt - settleMap[p1][p2];
          delete settleMap[p1][p2];
        }
      } else {
        !settleMap[p2] && (settleMap[p2] = {});
        settleMap[p2][p1] = amt;
      }
    });
  
    console.log(settleMap);
    
  Object.keys(settleMap).forEach(p1 => {
      Object.keys(p1).forEach(p2 => {
        Object.keys(settleMap[p2]).forEach(mid => {
          if(settleMap[mid] && settleMap[mid][p1]){
            if(settleMap[mid][p1] > settleMap[p1][p2]) {
              settleMap[mid][p1] = settleMap[mid][p1] - settleMap[p1][p2];
              delete settleMap[p1][p2];
            } else {
              settleMap[p1][p2] = settleMap[p1][p2] - settleMap[mid][p1];
              delete settleMap[mid][p1];
              delete settleMap[p2][mid];
            }
          }
        })
      })
    });
  
  console.log(settleMap);
    
  let tsCount = 0;
  Object.keys(settleMap).forEach(p1 => {
    tsCount += Object.keys(p1).length;
  });
  
  return tsCount;
  
};

minTransfers([[0,1,10],[2,0,5]]);
//2

minTransfers([[0,1,10], [1,0,1], [1,2,5], [2,0,5]]);
//1 ( 1 to 0 -> $4)


minTransfers([[0,1,10],[1,0,1],[1,2,5],[2,0,5]]);
// output: 3 , Expected: 1
