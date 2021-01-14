// Find maximum product of two integers in an array

// Maximum product = (firstMax * secondMax)  or (firstMin * secondMin)
// Time complexity O(n)

function findMaxProduct(arr) {
  let positiveMax1 = null,
    positiveMax2 = null,
    negativeMin1 = null,
    negativeMin2 = null,
    product1 = null,
    product2 = null;
  for (let i=0; i < arr.length; i++) {
    if(Math.sign(arr[i]) === 1) {
      if (!positiveMax1 || !positiveMax2) {
        (!positiveMax1) ? (positiveMax1 = arr[i]) : (positiveMax2 = arr[i]);
        
        if(positiveMax1 || positiveMax2  && (positiveMax1 < positiveMax2)) {
          [positiveMax1, positiveMax2] = [positiveMax2, positiveMax1];
        }
      } else {
        if(positiveMax2 < arr[i]) { // Allways comapre and replace the second max value first.
          positiveMax2 = arr[i];

          if(positiveMax1 < positiveMax2) {
            [positiveMax1, positiveMax2] = [positiveMax2, positiveMax1]; // re-arreng te max1 and max2 in not proper.
          }
        } 
      }
    } else {
      if (!negativeMin1 || !negativeMin2) {
        (!negativeMin1) ? (negativeMin1 = arr[i]) : (negativeMin2 = arr[i]);

        if(negativeMin1 || negativeMin2  && (negativeMin1 > negativeMin2)) {
          [negativeMin1, negativeMin2] = [negativeMin2, negativeMin1];
        }
      } else {
        if(negativeMin2 > arr[i]) { // Allways comapre and replace the second min value first.
          negativeMin2 = arr[i];

          if(negativeMin1 > negativeMin2) { // re-arreng te min1 and min2 in not proper.
            [negativeMin1, negativeMin2] = [negativeMin2, negativeMin1];
          }
        }
      }
    }
  }

  if (positiveMax1 && positiveMax2) {
    product1 = positiveMax1 * positiveMax2;
  }

  if(negativeMin1 && negativeMin2) {
    product2 = negativeMin1 * negativeMin2;
    debugger;
    return (product1 > product2) ? product1 : product2;
  } else {
    return product1;
  }
}

findMaxProduct([10,20,4,2,-19,40,5,27,-4,0]);
//1080
findMaxProduct([10, 15, 100, 400]);
//
//------------------------------------------------------------------------------------------------------------

