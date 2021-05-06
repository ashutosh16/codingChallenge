// https://leetcode.com/problems/multiply-strings/
// 43. Multiply Strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(!+num1 || !+num2) return '0'
    const result = Array(num1.length+num2.length).fill(0);
    let resultIndex = result.length-1;
  
    for(let i=num1.length-1; i>=0; i--) {
      let index = resultIndex;
      for(let j=num2.length-1; j>=0; j--) {
        const mul = (+num1[i] * +num2[j]) + result[index];
        result[index] = mul%10;
        result[index-1] += Math.floor(mul/10);
        index --;
      }
      resultIndex--;
    }
   // Remove first 0
    while(result[0]===0) {
      result.shift();
    }
    return result.join("");
};

multiply("123","456");
//"56088"
