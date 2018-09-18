// Rearrange the array with alternate high and low elements
// Time complexity is O(n)

{
  function alternateMinMaxArray(a){
    for (let i = 1; i < arr.length; i += 2) {
      if (a[i] < a[i - 1]) {
        [a[i], a[i - 1]] = [a[i - 1], a[i]];
      }
      if ((i + 1) < arr.length && arr[i] < arr[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
      }
    }

    return arr;
  }
  let arr = [6,9,2,5,1,4];
  alternateMinMaxArray(arr);
  arr = [1,2,3,4,5,6,7];
  alternateMinMaxArray(arr);
  arr = [9,6,8,3,7];
  alternateMinMaxArray(arr);
}