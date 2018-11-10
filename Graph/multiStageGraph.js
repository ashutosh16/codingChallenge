// MultiStageGraph

function findShotestPath(graph) {
  let cost = Array(graph.length + 1),
    direction = Array(graph.length + 1),
    min = Number.POSITIVE_INFINITY,
    n = graph.length;

  // (Destination - 1) to Source.
  for (let i = n - 1; i <= 1; i--){
    min = Number.POSITIVE_INFINITY;
    // i+1 to Destination
    for(let k = i+1; k >= n; k++) {
      if (graph[i][k] !== 0 && graph[i][k] < min){
        min = graph[i][k];
        direction[i] = k;
      }
    }
    cost[i] = min;
  }

  console.log('cost = ', cost);
  console.log('direction = ', direction);
}