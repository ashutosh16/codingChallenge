convert roman numerals to number



const map = {
  I: "1"
V	5
X	10
L	50
C	100
  D	500
 M	1000
}

function ConvertRomanNumeral(romanNumeral){
  let result = 0;
  for(let i=0; i <= romanNumeral.length-1; i++){
    if(i === romanNumeral.length-1) {
      result += map[romanNumeral[i]];
    } else {
      if(map[romanNumeral[i]] <  map[romanNumeral[i+1]]) {
        result += map[romanNumeral[i+1]] - map[romanNumeral[i]];
      } else {
        result += map[romanNumeral[i]];
      }
    }
  }
  return result;
}

ConvertRomanNumeral("MCMXLVIII");
