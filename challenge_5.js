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