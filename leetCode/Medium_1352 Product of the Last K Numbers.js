// https://leetcode.com/problems/product-of-the-last-k-numbers/

// Implement the class ProductOfNumbers that supports two methods:

// 1. add(int num)
// Adds the number num to the back of the current list of numbers.

// 2. getProduct(int k)
// Returns the product of the last k numbers in the current list.
// You can assume that always the current list has at least k numbers.
// At any time, the product of any contiguous sequence of numbers will f  q2it into a single 32-bit integer without overflowing.

// Example:
// Input
// ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
// [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]

// Output
// [null,null,null,null,null,null,20,40,0,null,32]

// Explanation
// ProductOfNumbers productOfNumbers = new ProductOfNumbers();
// productOfNumbers.add(3);        // [3]
// productOfNumbers.add(0);        // [3,0]
// productOfNumbers.add(2);        // [3,0,2]
// productOfNumbers.add(5);        // [3,0,2,5]
// productOfNumbers.add(4);        // [3,0,2,5,4]
// productOfNumbers.getProduct(2); // return 20. The product of the last 2 numbers is 5 * 4 = 20
// productOfNumbers.getProduct(3); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
// productOfNumbers.getProduct(4); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
// productOfNumbers.add(8);        // [3,0,2,5,4,8]
// productOfNumbers.getProduct(2); // return 32. The product of the last 2 numbers is 4 * 8 = 32 

// Hint: 
// Create productArray as 
// productArray[i] = (arr[i] === 0) ? 1 : arr[i]*productArray[i-1];
// <----------total product----------->
// <---p1------><-------p2------------>
// p2 = total product / p1
//If you encounter 0 then just add 1 in productArray.

var ProductOfNumbers = function() {
  this.numsArr = [1];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  if(!num) {
      this.numsArr = [1];
  } else {
    const lastSum = this.numsArr[this.numsArr.length-1] || 1;
    this.numsArr.push(lastSum * num);
  }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  const n = this.numsArr.length-1;
  return (this.numsArr[n] / this.numsArr[n-k]) || 0;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

// ["ProductOfNumbers","add","getProduct","getProduct","getProduct","add","add","add"]
// [[],[1],[1],[1],[1],[7],[6],[7]]

//[null,null,1,1,1,null,null,null]
