// https://leetcode.com/problems/brace-expansion/
// You are given a string s representing a list of words. Each letter in the word has one or more options.

// If there is one option, the letter is represented as is.
// If there is more than one option, then curly braces delimit the options. For example, "{a,b,c}" represents options ["a", "b", "c"].
// For example, if s = "a{b,c}", the first character is always 'a', but the second character can be 'b' or 'c'. The original list is ["ab", "ac"].

// Return all words that can be formed in this manner, sorted in lexicographical order.

 

// Example 1:

// Input: s = "{a,b}c{d,e}f"
// Output: ["acdf","acef","bcdf","bcef"]
// Example 2:

// Input: s = "abcd"
// Output: ["abcd"]

/**
 * @param {string} s
 * @return {string[]}
 */

function expand(str){
    let queue = [];
    let i=0;
    while(i<str.length) {
      if(str[i] !== "{") {
        queue = (queue.length) ? queue.map(s => s+str[i]) : [str[i]];
        i++;
      } else {
        const end = str.indexOf("}", i);
        const charOption = str.slice(i+1, end).split(",");
        queue = queue.length ? charOption.reduce((acc, char)=>{
              acc.push(...queue.map(s=>s+char));
              return acc;
           }, []) : charOption;
        i = end+1;
      }
    }
    return queue.sort();
  }

//--------------------------------------------------------------------------------------------------------------

 var expand = function(s) {
  let result = [];
  
  for(let i=0; i<s.length;){
    if(s[i] !== '{') {
      result = result.length ? result.map(str => str+s[i]) : [s[i]];
      i++;
    } else {
      const end = s.indexOf("}", i+1);
      const temp = s.slice(i+1,end).split(",");
      
      if(result.length) {
        let merge = [];
        for(let r=0; r< result.length; r++) {
          merge.push(...temp.map(str => result[r]+str));
        }
        result = merge;
      } else {
        result = temp;
      }      
      i=end+1;
    }
  }
  return result;
};

expand("{a,b}c{d,e}f");
// ["acdf", "acef", "bcdf", "bcef"]


