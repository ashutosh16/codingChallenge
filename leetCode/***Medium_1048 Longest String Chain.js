// https://leetcode.com/problems/longest-string-chain/
// Given a list of words, each word consists of English lowercase letters.

// Let's say word1 is a predecessor of word2 if and only if we can add exactly one 
// letter anywhere in word1 to make it equal to word2.  For example, "abc" is a predecessor of "abac".

// A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, 
// where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

// Return the longest possible length of a word chain with words chosen from the given list of words.

// Example 1:
// Input: words = ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: One of the longest word chain is "a","ba","bda","bdca".

// Example 2:
// Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// Output: 5

// Hint:
// Sort words arr with incresing length of word
// travel each word and check if one by one char removed from it. Is new formed word is present in map. get its chain length
// Add current word in the map with chain length+1


/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    if (words == null || words.length === 0) {
        return 0;
    }
    
    // Sort the words array by its length
    words.sort((a, b) => a.length - b.length);
    
    // Have a map to store the word and its count of longest string chain
    let map = {};
    let maxLen = 1;
    
    for (let word of words) {
        map[word] = 1;
        if (word.length === 1) {
            continue;
        }
      
        for (let i = 0; i < word.length; i++) {
            // From the first letter of the word, remove one by one and check whether rest of word exists in the map, if so, take the count + 1;
            const pre = word.slice(0, i) + word.slice(i + 1, word.length);
            map[word] = map[pre] ? map[pre] + 1 : Math.max(map[word], 1);
            
            // Update max len
            maxLen = Math.max(maxLen, map[word]);
        }
    }
    
    return maxLen;
};

