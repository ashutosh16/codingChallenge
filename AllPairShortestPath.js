// All pair shortest path.
// Time complexity O(n^3)

{
  function allPairShortestPath(g) {
    let n = g.length - 1;
    for(let k = 1; k <= n; k++) {
      for(let i = 1; i <= n; i++) {
        for(let j = 1; j <=n; j++){
          g[i][j] = Math.min(g[i][j], (g[i][k]+g[k][j]));
        }
      }
    }
    return g;
  }
  let infi = Number.POSITIVE_INFINITY;
  let g = [
            [0, 0, 0,    0,    0   ],
            [0, 0, 3,    infi, 7   ],
            [0, 8, 0,    2,    infi],
            [0, 5, infi, 0,    1   ],
            [0, 2, infi, infi, 0   ]];

  console.log(allPairShortestPath(g));

  // OUTPUT
  // [0, 0, 0, 0, 0]
  // [0, 0, 3, 5, 6]
  // [0, 5, 0, 2, 3]
  // [0, 3, 6, 0, 1]
  // [0, 2, 5, 7, 0]
}


