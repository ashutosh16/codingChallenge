https://leetcode.com/problems/frog-position-after-t-seconds/
Given an undirected tree consisting of n vertices numbered from 1 to n. A frog starts jumping from vertex 1. In one second, the frog jumps from its current vertex to another unvisited vertex if they are directly connected. The frog can not jump back to a visited vertex. In case the frog can jump to several vertices, it jumps randomly to one of them with the same probability. Otherwise, when the frog can not jump to any unvisited vertex, it jumps forever on the same vertex.

The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi.

Return the probability that after t seconds the frog is on the vertex target.

 

Example 1:



Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4
Output: 0.16666666666666666 
Explanation: The figure above shows the given graph. The frog starts at vertex 1, jumping with 1/3 probability to the vertex 2 after second 1 and then jumping with 1/2 probability to vertex 4 after second 2. Thus the probability for the frog is on the vertex 4 after 2 seconds is 1/3 * 1/2 = 1/6 = 0.16666666666666666. 
Example 2:



Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 1, target = 7
Output: 0.3333333333333333
Explanation: The figure above shows the given graph. The frog starts at vertex 1, jumping with 1/3 = 0.3333333333333333 probability to the vertex 7 after second 1. 
Example 3:

Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 20, target = 6
Output: 0.16666666666666666


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
  if(t <= 0 || !edges.length) return 0; 
  if(target === 1) return 1;
  
  let map = {};
    for(let i = 0; i < edges.length; i++) {
      // Tree small value node will always be parent of the higher value node.
      if(edges[i][0] > edges[i][1]) {
        [edges[i][0], edges[i][1]] = [edges[i][1], edges[i][0]]
      }
      if(!map[edges[i][0]]) {
        map[edges[i][0]] = [];
      }
      map[edges[i][0]].push(edges[i][1]);
    }
  console.log(map);
    
    let result = findTarget(1 /*currentNode**/, t, target, map, 1 /** Chance */);
    return result.chance;
};

function findTarget(currentNode, time, target, map, chance) {
  if(currentNode === target) return { found: true, chance: chance};
  if(time <= 0) return { found: false};
  
  let child = map[currentNode];
  if(!child) return  { found: false};
  // chance = currentNode === 1 ? (chance / child.length) : (chance / (child.length -1));
  chance = (chance / child.length);
  time --;
  if(time >= 0 ){
    for(let i=0; i< child.length; i++){
      let result = findTarget(child[i], time, target, map, chance);
      
      console.log(result);
      if(result.found === true) return result;
    }
  }
  return { found: false};
}

// frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]] , 2, 4);

// frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]],20, 6);
// 0.16667


// frogPosition(3, [[2,1],[3,2]], 1, 2);
// 1

// 8
// [[2,1],[3,2],[4,1],[5,1],[6,4],[7,1],[8,7]]
// 7
// 7
// Output: 0.25000
// Expected: 0.0
