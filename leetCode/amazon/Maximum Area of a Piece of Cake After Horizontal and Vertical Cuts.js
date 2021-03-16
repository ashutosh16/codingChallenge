// https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
// Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
// Given a rectangular cake with height h and width w, and two arrays of integers horizontalCuts and verticalCuts 
// where horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, 
// verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.

// Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. 
// Since the answer can be a huge number, return this modulo 10^9 + 7.

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a,b)=>a-b);
  verticalCuts.sort((a,b)=>a-b);
  horizontalCuts.push(h);
  horizontalCuts.unshift(0);
  verticalCuts.push(w);
  verticalCuts.unshift(0);
  
  function getMaxCut(cuts){
    let maxCut = 0;
    for(let i=0; i<cuts.length-1; i++){
    maxCut = (cuts[i+1] - cuts[i]) > maxCut 
      ? (cuts[i+1] - cuts[i])
      : maxCut;
    }
    return maxCut;
  }
  // % (10 ** 9 + 7); Added to handle the max area;
  return (getMaxCut(horizontalCuts) * getMaxCut(verticalCuts)) % (10 ** 9 + 7);
};


// HINT: Longest cut from vertical and Longest cut from horizontal will make bigest cut.
