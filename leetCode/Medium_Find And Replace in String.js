/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {debugger;
    let resultArr = S.split('');
  
    for(let i = 0; i < indexes.length; i++ ) {
      if(S.substr(indexes[i], sources[i].length) === sources[i]) {
        resultArr[indexes[i]] = targets[i];
        for(let c = indexes[i] + 1; c < (indexes[i] + sources[i].length); c++) {
          resultArr[c] = '';
        }
      }
    }
  return resultArr.join('');
    
};
