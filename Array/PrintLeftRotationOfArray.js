// Print Left rotation of array at given point 
function LeftRotation (arr, r) {
	let count = 0;
  let n = arr.length; 

	for( let i = 0; i < n; i++) {
		let j = (i - r + n) % n;
		let temp = arr[i];
		while(count < n) {
            [arr[j] , temp] = [temp, arr[j]];
            count ++;
            if(count === n || i === j) break;
            j = (j - r + n) % n;
        }
        if(count === n ) break;
    }
    return arr;
}


LeftRotation([1,2,3,4,5,6], 3);

// [4, 5, 6, 1, 2, 3]
