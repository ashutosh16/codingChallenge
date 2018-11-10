/** 
 * Find all occurrences of pattern in given string.
 * Given a text txt[0..n - 1] and a pattern pat[0..m - 1], 
 * write a function search(char pat[], char txt[]) that prints all occurrences of pat[] in txt[].
 * You may assume that n > m.
 * https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
 */
{
  function findLongestCommonSuffix(pattern) {
    let lps = new Array(pattern.length),
      length = 0,
      i = 1;
      lps[0] = 0;

      while(i < pattern.length){
        if(pattern[i] === pattern[length]){
          length++;
          lps[i] = length;
          i++;
        } else {
          if(length === 0){
            lps[i] = 0;
            i++;
          } else {
            length = lps[length - 1 ];
          }
        }
      }

    console.log(lps);
    // 'AABA' = [0, 1, 0, 1]
    return lps;
  }

  function patternMatching(str, pattern) {
    let lps = findLongestCommonSuffix(pattern),
      j = 0,
      i = 0;

    while(i < str.length) {
      if (str[i] === pattern[j]) {
        i++;
        j++;
      } 

      if(j === pattern.length) {
        console.log('pattern found at ', i - pattern.length);
        j = lps[j-1];
      } else 
        if (i < str.length && str[i] !== pattern[j]) {
          if(j !== 0) {
            j = lps[j-1];
          } else {
            i++;
          }
        }
    }

  }

  patternMatching('AABAACAADAABAABA', 'AABA');

  // pattern found at  0
  // pattern found at  9
  // pattern found at  12
}