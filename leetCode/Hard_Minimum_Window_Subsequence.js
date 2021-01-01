// Minimum Window Subsequence.

// Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

// If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

// Example 1:

// Input: 
// S = "abcdebdde", T = "bde"
// Output: "bcde"
// Explanation: 
// "bcde" is the answer because it occurs before "bdde" which has the same length.
// "deb" is not a smaller window because the elements of T in the window must occur in order.
 

// Note:

// All the strings in the input will only contain lowercase letters.
// The length of S will be in the range [1, 20000].
// The length of T will be in the range [1, 100].

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
  let start = 0;
  let end = 0;
  let p = 0;
  let result = '';
  while(end < S.length){
    if(T[p] === S[end]) {
      end ++;
      if(p === T.length-1){
        if(!result) {
          result = S.slice(start, end);
        } else 
        if(result.length > (end - start)) {
          result = S.slice(start, end+1);   
        }
        p=0;
        start = end;
      } else {
        p++;
      }
      
    } else {
      (p === 1 && S[end] == T[0]) && (start = end);
      end++;
      (p===0) && start++;
      
    }
  }
  
  return result;
};


minWindow("fgrqsqsnodwmxzkzxwqegkndaa", "kzed");
// Output : "kzxwqegknd"

//Failed
minWindow("ffynmlzesdshlvugsigobutgaetsnjlizvqjdpccdylclqcbghhixpjihximvhapymfkjxyyxfwvsfyctmhwmfjyjidnfryiyajmtakisaxwglwpqaxaicuprrvxybzdxunypzofhpclqiybgniqzsdeqwrdsfjyfkgmejxfqjkmukvgygafwokeoeglanevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuhejsdzkfwgqdbwinkxqypaphktonqwwanapouqyjdbptqfowhemsnsl", 
          "ntimcimzah");

//Output: "nmlzesdshlvugsigobutgaetsnjlizvqjdpccdylclqcbghhixpjihximvhapymfkjxyyxfwvsfyctmhwmfjyjidnfryiyajmtakisaxwglwpqaxaicuprrvxybzdxunypzofhpclqiybgniqzsdeqwrdsfjyfkgmejxfqjkmukvgygafwokeoeglanevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuh"
//Expected: "nevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuhejsdzkfwgqdbwinkxqypaph"



