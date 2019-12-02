// MultiStageGraph - Find shotest path from source to destination in Multi stage graph.

function findShotestPath(graph, stage) {
  let cost = Array(graph.length).fill(0),
    direction = Array(graph.length),
    min = Number.POSITIVE_INFINITY,
    n = graph.length - 1;

  // (Destination - 1) to Source.
  for (let i = n - 1; i >= 1; i--) {
    min = Number.POSITIVE_INFINITY;
    // i+1 to Destination
    for (let k = i + 1; k <= n; k++) {
      if (graph[i][k] !== 0 && (graph[i][k] + cost[k]) < min) {
        min = (graph[i][k] + cost[k]);
        direction[i] = k;
      }
    }
    if (min !== Number.POSITIVE_INFINITY) {
      cost[i] = min;
    }

  }

  console.log('cost = ', cost);
  console.log('direction = ', direction);

  // Find path
   let path = '1 ----> ';
   let cn = 1;
   while(cn !== 8) {
     path += direction[cn] +' ----> ';
     cn = direction[cn];
   }

   return path;
}

// Nodes start from 1 to 8
let graph = [//0  1  2  3  4  5  6  7  8 
              [0, 0, 0, 0, 0, 0, 0, 0, 0],//0
              [0, 0, 2, 1, 3, 0, 0, 0, 0],//1
              [0, 0, 0, 0, 0, 2, 3, 0, 0],//2
              [0, 0, 0, 0, 0, 0, 7, 0, 0],//3
              [0, 0, 0, 0, 0, 6, 8, 9, 0],//4
              [0, 0, 0, 0, 0, 0, 0, 0, 6],//5
              [0, 0, 0, 0, 0, 0, 0, 0, 4],//6
              [0, 0, 0, 0, 0, 0, 0, 0, 5],//7
              [0, 0, 0, 0, 0, 0, 0, 0, 0]//8
            ],
  stage = 4;
let path = findShotestPath(graph, stage);
console.log('path = ', path);


// cost = [0,9,7,11,12,6,4,5,0]
// direction = [undefined,2,6,6,5,8,8,8,undefined]
// 'path = '
// '1 ----> 2 ----> 6 ----> 8 ----> '
