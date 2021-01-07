// Expressive Words : https://leetcode.com/problems/expressive-words/

// Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  In these strings like "heeellooo",
// we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".

// For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation: 
// choose a group consisting of characters c,
// and add some number of characters c to the group so that the size of the group is 3 or more.
// For example, starting with "hello", we could do an extension on the group "o" to get "hellooo",
// but we cannot get "helloo" since the group "oo" has size less than 3.  Also, we could do another extension like "ll" -> "lllll" to get "helllllooo". 
// If S = "helllllooo",
// then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = S.
// Given a list of query words, return the number of words that are stretchy. 

// Example:
// Input: 
// S = "heeellooo"
// words = ["hello", "hi", "helo"]
// Output: 1

// Explanation: 
// We can extend "e" and "o" in the word "hello" to get "heeellooo".
// We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
 

// Constraints:
// 0 <= len(S) <= 100.
// 0 <= len(words) <= 100.
// 0 <= len(words[i]) <= 100.
// S and all words in words consist only of lowercase letters


/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {debugger;
    if(S.length === 0 ) return 0;
    let result = 0;
    for(let i=0; i < words.length; i++) {
      let sI = 0;
      let wI = 0;
      let W = words[i];
      let isStretchy = true;
      while(sI < S.length || wI < W.length) {
        if(S[sI] === W[wI]) {
          let char = S[sI];
          let sCount = 0; // Count of continues char in S
          let wCount = 0; // Count of continues char in W
         
          while(sI < S.length && S[sI] === char) {
            sI++; sCount++;
          }
         
          while(wI < W.length && W[wI] === char) {
            wI++; wCount++;
          }
         
          //If count is equal then char is equal.
          if(wCount !== sCount) {
             if(wCount > sCount || sCount < 3) {
               isStretchy = false;
               break;
             }
          }
        } else {
          isStretchy = false;
          break;
        }
      }
      isStretchy && (result+=1);
    }
  return result;
};

// Solution working for all cases.

expressiveWords("heeellooo", ["hello", "hi", "helo"]);
// Output: 2

expressiveWords("zzzzzyyyyy", ["zzyy","zy","zyy"]);
//Expected: 3

expressiveWords("aaa", ["aaaa"]);
// Expected : 0

expressiveWords("heeellooo", ["heeelloooworld"]);
//Expected: 0

expressiveWords("", ["heeelloooworld"]);


//Hint
// Count the number of times continues char occured in in word.
// Count the number of times continues char occured in in S.
// if count is same then same char its good case.
// if wCount > Scount then wrong word itself.
// if wCount < Scount but sCount < 3 bad as condition for strechy is more than 3
// if char itself is diffrent then wrong word.

