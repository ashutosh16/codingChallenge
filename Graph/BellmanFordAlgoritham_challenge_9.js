/**
 * Bellman ford algoritham.
 * Relax all edges n-1 times, where n is no of vertex.
 * Find shortest path from source to all other vertex.
 * Drawback -  If there is -ve weight cycle this will fail. (No vertex should relax if you perform relaxation after (n-1) times but in case of -ve weight cycle its continue to relax the edges.)
 * 
 * Time Complexity
 * 1. To relax 1 edge we need n Loop
 * 2. To relax n edges we need n * n loops
 * 3. To relax n edges for (n-1) times we need n * n * (n-1) => O(n^3)  
 * 
 */

/**
 * 
 * @param {Array} g represent graph with array of array 
 * @param {Number} source number represents source vertex
 * @returns {Array} distence of all vertex from source
 */
function bellmanFordAlgo (g, source) {
  let v = g.length - 1,// no of vertex.
    d = Array(v+1).fill(Number.MAX_SAFE_INTEGER),
    p = Array(v+1).fill(Number.MAX_SAFE_INTEGER);
  d[source] = 0;
  for (let i = 1; i <= v-1; i++) { //Relax all vertex for v-1 times, we can stop if none of the edge is relax;
    for (let j = 1; j <= v; j++) { //Relax j vertex
      for (let k = 1; k <= v; k++) {
        if (g[j][k] !== 0 && (g[j][k] + d[j]) < d[k]) { //if there is edge from j to k && (edge j to k + d[j] < d[k])
          d[k] = g[j][k] + d[j];
          p[k] = j;
        }
      }
      console.log(j + ' = '+ d);
    }
  }
  
  return {distence : d, path: p};
}

let g = [
  // 0  1  2  3  4  
    [0, 0, 0, 0, 0],//0
    [0, 0, 4, 0, 5],//1
    [0, 0, 0, 0, 0],//2
    [0, 0, -10, 0, 0],//3
    [0, 0, 0, 3, 0],//4
];

(1)----4----*(2)
 |            *
 |            |
 |5           |-10
 |            | 
 *            |
(3)----3----*(4)
  
let result = bellmanFordAlgo(g, 1);

console.log(result);

// {
// distence:(5) [
// 9007199254740991,
// 0,
// -2,
// 8,
// 5
// ],
// path:(5) [
// 9007199254740991,
// 9007199254740991,
// 3,
// 4,
// 1
// ]
// }
