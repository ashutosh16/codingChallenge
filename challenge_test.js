yes "1234321"
yes "3432112"

no "3 4 23112"
index= 1;
i = index-1; 
j = index+1;




function palindrom(str){
	
  let i = 0,
  	j = str.length - 1 ;
  
  while( i < j ){
  	if(str[i] !== str[j]) {
    	return false;
    }
    i++;
    j--;
  }
  return true;
}

 ---> 

pal: "12344321"

rot "34432112"

findUniqChar(str){
  for(var i = 0; i < )
}

function findPalindrom(str){
	let isOddLength = (str.length % 2) === 0 ? false : true ;
  if(isOddLength){
  	let temp = {},
    	i = 0,
      unic = null;
    while(i < str.length){
    	if(!temp[i]){
      	temp[i] = i;
      } else {
      	delete temp[i];
      }
    }
    
    for (let key of Object.keys(temp)) {
    	if(temp[key] === 1){
      	unic = key;
        break;
      }
    }
    
    
    
  } else {
  	
  }

}


"34423112"

