// Dijstra's Algorithm
// given grapth we need to find shortest distem between source to destination.

function dijstraAlgo (g, source, destination) {
  let current = source,
    n = g.length - 1,
    min = Number.POSITIVE_INFINITY,
    d = Array(n + 1).fill(min),
    visited = Array(n + 1).fill(0),
    path = Array(n + 1).fill(-1);

  visited[source] = source;
  d[source] = 0;
  // continue till we reached the current node with shotest path.
  while (current !== destination) {
    // distence from source to all vertex via current vertex.
    // d[current] is sourcet to current vertex distence.
    for(let i = 1; i <= n; i++) {
      if(g[current][i] !== 0 && visited[i] !== 1) {
        if ((g[current][i] + d[current]) < d[i]) {
          d[i] = g[current][i] + d[current];
          path[i] = current;
        }
      }
    }
    
    //find the shotest distence from 
    min = Number.POSITIVE_INFINITY;
    for (let i = 1; i <= n; i++) {
      if (visited[i] !== 1 && d[i] < min) {
        min = d[i];
        current = i;
      }
    }

    visited[current] = 1;
  }

  console.log(path);
  //configure path string from path array
  let i = destination,
  pathStr = `${destination}`;
  while (i !== source) {
    pathStr = `${path[i]} ---> ${pathStr}`;
    i = path[i];
  }

  return pathStr;
};

let g = [
// 0  1  2  3  4  5  6
  [0, 0, 0, 0, 0, 0, 0],//0
  [0, 0, 2, 4, 0, 0, 0],//1
  [0, 0, 0, 1, 7, 0, 0],//2
  [0, 0, 0, 0, 0, 3, 0],//3
  [0, 0, 0, 0, 0, 0, 1],//4
  [0, 0, 0, 0, 2, 0, 5],//5
  [0, 0, 0, 0, 0, 0, 0],//6
];

let source = 1,
  destination = 6;
console.log(`shortest path from ${source} to ${destination} is ${dijstraAlgo(g, source, destination)}`);