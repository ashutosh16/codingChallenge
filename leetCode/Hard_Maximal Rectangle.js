Maximal Rectangle

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if(matrix.length === 0) return 0;
    let left = Array(matrix[0].length);
    let right = Array(matrix[0].length);
    let mat = Array(matrix[0].length).fill(0);
    let resultArea = 0;
  
//   FOr each row sonsider the base of the histagram
    for(let r=0; r < matrix.length; r++) {
      let st = [];
//    For each col consider fully included in result rectangle
//       Calculate left range for each column
      for(let c=0; c< matrix[r].length; c++){
         if(matrix[r][c] === "1") {
          mat[c] = mat[c] + 1;
          
          //Calculate the leftRange
            while(st.length && mat[c] <= mat[st[st.length-1]]) st.pop();
            left[c] = st.length ? st[st.length-1]+1 : 0;
          } else {
            mat[c] = 0;
          }
         st.push(c); //Remember need to push in if and else both this cases.
      }
      
      st = [];
      
      //       Calculate left range for each column
      for(let c=matrix[r].length-1; c >= 0; c--){
        if(matrix[r][c] === "1"){
          while(st.length && mat[c] <= mat[st[st.length-1]]) st.pop();
          right[c] = st.length ? st[st.length-1]-1 : matrix[r].length-1;
          
          resultArea = Math.max(resultArea, (right[c] - left[c]+1)* mat[c]);
        }
        st.push(c);
      }
    }
  return resultArea;
    
};
