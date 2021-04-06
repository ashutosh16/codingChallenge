// https://leetcode.com/problems/frog-position-after-t-seconds/
// Given an undirected tree consisting of n vertices numbered from 1 to n. A frog starts jumping from vertex 1. 
// In one second, the frog jumps from its current vertex to another unvisited vertex if they are directly connected. 
// The frog can not jump back to a visited vertex. In case the frog can jump to several vertices, it jumps randomly to one of them with the same probability. 
// Otherwise, when the frog can not jump to any unvisited vertex, it jumps forever on the same vertex.
// The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi.
// Return the probability that after t seconds the frog is on the vertex target.

// Example 1:
// Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4
// Output: 0.16666666666666666 
// Explanation: The figure above shows the given graph. The frog starts at vertex 1,
// jumping with 1/3 probability to the vertex 2 after second 1 and then jumping with 1/2 probability to vertex 4 after second 2.
// Thus the probability for the frog is on the vertex 4 after 2 seconds is 1/3 * 1/2 = 1/6 = 0.16666666666666666. 


// Example 2:
// Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 1, target = 7
// Output: 0.3333333333333333
// Explanation: The figure above shows the given graph. The frog starts at vertex 1, jumping with 1/3 = 0.3333333333333333 probability to the vertex 7 after second 1. 
// Example 3:

// Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 20, target = 6
// Output: 0.16666666666666666


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */

var frogPosition = function(n, edges, t, target) {
  if(t <= 0 || !edges.length) return 1; 
  
  let graph = {};
  // convert input into the graph.
  for(let i = 0; i < edges.length; i++) {
    // Tree small value node will always be parent of the higher value node.
    if(edges[i][0] > edges[i][1]) {
      [edges[i][0], edges[i][1]] = [edges[i][1], edges[i][0]]
    }
    if(!graph[edges[i][0]]) {
      graph[edges[i][0]] = [];
    }
    graph[edges[i][0]].push(edges[i][1]);
  }
//   edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]]
  // graph = { '1': [ 2, 3, 7 ], '2': [ 4, 6 ], '3': [ 5 ] }
    
  return findTarget(1 /*currentNode**/, t, target, graph);
};

// Leaf node will aways return 1 or 0
// frog will always stop at leaf node.
function findTarget(currentNode, time, target, graph) {
  if(currentNode === target) {
    // If time is 0 means frog can not go further or if no child of current node then also frog will jump at target point
    // else return 0 because frog will move to next location and will not be present at target on time t because he pass the target and cant revisite 
    return (time === 0 || !graph[currentNode]) ? 1 : 0;        
  }
  
  let child = graph[currentNode];
  if(!child) return  0; // If no children then frog is block here. Frog will jump endlessly at same position.
  time --;
  if(time >= 0 ){
    return Math.max(...child.map(
      n => findTarget(n, time, target, graph)
    )) / child.length; // Divide by child length to get probability
  }
  return 0;
}
// 7: number of nodes, [[]]: vertex list, 2: sec, 4: target node 
frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 2, 4);
// 0.16667

// frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]] , 2, 4);
// 1 
// |---------> 2
//             |--------->4
//             |--------->6
// 
// |---------> 3
//             |--------->5
// 
// |---------> 7


// frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]],20, 6);
// 0.16667


// frogPosition(3, [[2,1],[3,2]], 1, 2);
// 1

// frogPosition(8, [[2,1],[3,2],[4,1],[5,1],[6,4],[7,1],[8,7]], 7, 7);
// 0.0
