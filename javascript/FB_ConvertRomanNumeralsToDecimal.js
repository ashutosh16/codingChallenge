// convert roman numerals to number
// https://www.calculatorsoup.com/calculators/conversions/roman-numeral-converter.php

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function ConvertRomanNumeral(romanNumeral){
  let result = 0;
  for(let i=0; i <= romanNumeral.length-1; i++){
    if(i === romanNumeral.length-1) {
      result += map[romanNumeral[i]];
    } else {
      if(map[romanNumeral[i]] <  map[romanNumeral[i+1]]) {
        result += map[romanNumeral[i+1]] - map[romanNumeral[i]];
        i++;
      } else {
        result += map[romanNumeral[i]];
      }
    }
  }
  return result;
}

// Roman Numeral	=	Arabic Number
// M	=	1000
// CM	=	900
// XL	=	40
// VIII	=	8
// Total	=	1948

ConvertRomanNumeral("MCMXLVIII"); // 1948
