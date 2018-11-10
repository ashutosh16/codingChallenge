// Sort a Rotated Sorted Array
// Input: [3, 4, 1, 2] Output: [1, 2, 3, 4]
// Input: [2, 3, 4, 1] Output: [1, 2, 3, 4]


function sort(arr) {
  let i = 1,
    j = arr.length - 1,
    newArr = [arr[0]];

  while (arr[i] > arr[i - 1]) {
    newArr.push(arr[i]);
    i++;
  }
  while (j >= i) {
    newArr.unshift(arr[j]);
    j--;
  }

  return newArr;
}

var sortedArr = sort([1, 2, 3, 4, 5]);
console.log(sortedArr);


function reverse(str, index = 0) {
  if ((str.length / 2) > index) {
    console.log(index);
    let temp = str[index];
    str[index] = str[str.length - 1 - index];
    str[str.length - index] = temp;
    return reverse(str, index + 1);
  } else {
    return str;
  }
}

console.log(reverse('sameer'));