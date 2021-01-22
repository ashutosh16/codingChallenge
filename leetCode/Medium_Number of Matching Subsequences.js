// Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.
// https://leetcode.com/problems/number-of-matching-subsequences/

// Example :
// Input: 
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// Output: 3
// Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
// Note:

// All words in words and S will only consists of lowercase letters.
// The length of S will be in the range of [1, 50000].
// The length of words will be in the range of [1, 5000].
// The length of words[i] will be in the range of [1, 50].

// https://www.youtube.com/watch?v=PwQnydsKk_I


/
function IsMatchingSequence(map, word) {
  let lastIndex = -1;
  for(let i=0; i < word.length; i++) {
    let char = word[i];
    if(map[char]) {
      let pointer = 0;
      // we can implement binary search here to improve time complexity
      while(lastIndex >= map[char][pointer] && pointer <  map[char].length) {
        pointer++;
      }
      if(pointer < map[char].length) {
        lastIndex = map[char][pointer];
      } else {
        return false;
      }

    } else {
      return false;
    }
  }
  return true;
}


/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) { debugger;
    let map = {};
    let result = [];
  
    for(let i=0; i<S.length; i++) {
      if(map[S[i]]) {
        map[S[i]].push(i);
      } else {
        map[S[i]] = [i];
      }
    }
  
    for(let i=0; i<words.length; i++) {
      IsMatchingSequence(map, words[i]) && result.push(words[i]);
    }
  
    return result.length;
};

// numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]);

numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]);
//2


numMatchingSubseq("abcde",["a","bb","acd","ace"]);
// 3
