// Bellman ford algoritham.
// Relax all edges n-1 times, where n is no of vertex.
// Find shortest path from source to all other vertex.
// Drawback: If there is -ve weight cycle this will fail.


/**
 * 
 * @param {Array} g represent graph with array of array 
 * @param {Number} source number represents source vertex
 * @returns {Array} distence of all vertex from source
 */
function bellmanFordAlgo (g, source) {
  let v = g.length - 1,// no of vertex.
    d = Array(v+1).fill(Number.MAX_SAFE_INTEGER);
  d[source] = 0;
  for (let i = 1; i <= v-1; i++) { //Relax all vertex for v-1 times
    for (let j = 1; j <= v; j++) { //Relax j vertex
      for (let k = 1; k <= v; k++) {
        if (g[j][k] !== 0 && (g[j][k] + d[j]) < d[k]) { //if there is edge from j to k && (edge j to k + d[j] < d[k])
          d[k] = g[j][k] + d[j];
        }
      }
      console.log(j + ' = '+ d);
    }
  }
  
  return d;
}

let g = [
  // 0  1  2  3  4  
    [0, 0, 0, 0, 0],//0
    [0, 0, 4, 0, 5],//1
    [0, 0, 0, 0, 0],//2
    [0, 0, -10, 0, 0],//3
    [0, 0, 0, 3, 0],//4
];

bellmanFordAlgo(g, 1);