// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
// https://leetcode.com/problems/word-break/
// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

// https://www.youtube.com/watch?v=iWenZCZEBIA
// https://www.youtube.com/watch?v=hLQYQ4zj0qg

// Solution 1: Recursive 
// Time complexity O(2^n)
let checkWord = function (s, wordDict, memo){
    if(!s.length) return true;
  
    for(let i=1; i <= s.length; i++) {
      if(memo[s.substring(0,i)]) return true;
      
      if(
        (wordDict.indexOf(s.substring(0,i)) > -1) &&
        checkWord(s.substring(i), wordDict, memo)
      ) {
        memo[s.substring(i)] = true;
        return true;   
      }
    }
    return false;
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let memo = {};
    return checkWord(s, wordDict, memo);
};

// This failed with timeout for below input
checkWord("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
          ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]);

// Expected: false


// Solution 2: https://www.youtube.com/watch?v=iWenZCZEBIA
var wordBreak = function(s, wordDict) {
  // find the longest word and only search upto that length.
  let maxWord = 0;
  let dMap = {};
  
  wordDict.forEach(word => {
    maxWord = Math.max(maxWord, word.length);
    // dMap[word] = true;
  })
  
  let i = 0;
  let j = 0;
  let dp = Array(s.length+1).fill(false);
  dp[0] = true;
  for(let i =0; i<= s.length; i++) {
    for(let j=i-1; j >=0; j--){
      if((i - j) <= maxWord && dp[j] && wordDict.indexOf(s.substring(j, i)) > -1){
      // if((i - j) <= maxWord && dp[j] && dMap[s.substring(j, i)]){
        dp[i] = true;
      } 
    }
  }
  return dp[dp.length-1];
}

//Passed all cases in Leetcode.

