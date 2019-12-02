/**
 * 
 * Prims algorithm use Geedy method to solve the MST problem.
 * This algorithm may or may not work for -ve edge graph.
 */


/**
 * 
 * @param {Array} g represents graph with 2 dimentional Array 
 */
function Prims(g) {
  let vertexCount = g.length -1,
    path = Array(g.length).fill(Number.MAX_SAFE_INTEGER),
    distance = Array(g.length).fill(Number.MAX_SAFE_INTEGER),
    visited = Array(g.length).fill(0),
    current = 1, //current
    min = Number.MAX_SAFE_INTEGER,
    count = 1,
    MinCost= 0;

  visited[1] = 1; // mark first or starting vertex as visited.
  distance[current] = 0; // Distence to reach first vertex is o.
  path[current] = current; // path to first vertex is itself.

  while (count <= vertexCount) {//repeat till we visite all vertex 
      for (let i = 1; i <= vertexCount; i++) { //normalize all vertex connected to the current vertex 'current'
        if(g[current][i] !== 0 &&  visited[i] !== 1){
          if(g[current][i] < distance[i]){
            distance[i] = g[current][i];
            path[i] = current;
          }
        }
      }

      min = Number.MAX_SAFE_INTEGER;

      // find Min cost vertex and made as current vertex which is not visited 
      for(let i=1; i <= vertexCount; i++){
        if(visited[i] !==1 && min > distance[i]){
          min = distance[i];
          current = i; // make i as current vertex
        }
      }

      // Mark current as visited
      visited[current] = 1;
      count++; //increse the count of visited vertex

    }//repeat while for new current vertex.

    console.log('distence = ', distance);
    console.log('visited = ', visited);
    console.log('path = ', path);
    
    for(let i=1; i <= vertexCount; i++){
      MinCost += distance[i]; 
    }
    console.log('Minimun cost = ', MinCost);
    return MinCost;
}

//Graph is starting from vertex 1 index 1.
let graph = [ [0, 0, 0, 0, 0],
          [0, 0, 5, 0, 4],
          [0, 5, 0, 3, 2],
          [0, 0, 3, 0, 6],
          [0, 4, 2, 6, 0]];

Prims(graph);
