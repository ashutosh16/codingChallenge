/**
 * @param {number[][]} M
 * @return {number}
 */
var longestLine = function(M) {debugger;
    if (!M || !M.length || !M[0].length) return 0;
    let Msize = M.length;
    let resultMatrix = Array(Msize);
    for(let i=0; i < Msize; i++) {
      resultMatrix[i] = Array(M[i].length).fill(0);
    }
    
    let getMatrixVal = (row, col, direction) => {
      if(-1 < row && row < Msize && -1 < col && col < M[row].length) {
        return resultMatrix[row][col][direction] || 0;
      }
      return 0;
    }
    
    let result = 0;
  
    for(let i=0; i < Msize; i++){
      for(let j =0; j < M[i].length; j++) {
        resultMatrix[i][j] = {
          H : 0,
          V : 0,
          DL : 0,
          DR : 0
        };
        if(M[i][j] === 1) {
          resultMatrix[i][j]['H'] = getMatrixVal(i, j-1, 'H') + 1;
          resultMatrix[i][j]['V'] = getMatrixVal(i-1, j, 'V') + 1;
          resultMatrix[i][j]['DL'] = getMatrixVal(i-1, j-1, 'DL') + 1;
          resultMatrix[i][j]['DR'] = getMatrixVal(i-1, j+1, 'DR') + 1;
          console.log(resultMatrix[i][j]);
          result = Math.max(
            resultMatrix[i][j]['H'],
            resultMatrix[i][j]['V'],
            resultMatrix[i][j]['DL'],
            resultMatrix[i][j]['DR'],
            result
          );
        }
        
      }
    }
  return result;
};


// [[1,1,1,1],[0,1,1,0],[0,0,0,1]]
//[[1,1,1]]
// [[1,1,0,0,1,0,0,1,1,0],[1,0,0,1,0,1,1,1,1,1],[1,1,1,0,0,1,1,1,1,0],[0,1,1,1,0,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,0,1,1,1],[0,1,1,1,1,1,1,0,0,1],[1,1,1,1,1,0,0,1,1,1],[0,1,0,1,1,0,1,1,1,1],[1,1,1,0,1,0,1,1,1,1]]

[[1,1,0,0,1,0,0,1,1,0],
 [1,0,0,1,0,1,1,1,1,1],
 [1,1,1,0,0,1,1,1,1,0],
 [0,1,1,1,0,1,1,1,1,1],
 [0,0,1,1,1,1,1,1,1,0],
 [1,1,1,1,1,1,0,1,1,1],
 [0,1,1,1,1,1,1,0,0,1],
 [1,1,1,1,1,0,0,1,1,1],
 [0,1,0,1,1,0,1,1,1,1],
 [1,1,1,0,1,0,1,1,1,1]]
