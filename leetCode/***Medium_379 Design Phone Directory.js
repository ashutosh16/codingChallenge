// https://leetcode.com/problems/design-phone-directory/
// Design a phone directory that initially has maxNumbers empty slots that can store numbers. The directory should store numbers, check if a certain slot is empty or not, and empty a given slot.

// Implement the PhoneDirectory class:

// PhoneDirectory(int maxNumbers) Initializes the phone directory with the number of available slots maxNumbers.
// int get() Provides a number that is not assigned to anyone. Returns -1 if no number is available.
// bool check(int number) Returns true if the slot number is available and false otherwise.
// void release(int number) Recycles or releases the slot number.
 

// Example 1:
// Input
// ["PhoneDirectory", "get", "get", "check", "get", "check", "release", "check"]
// [[3], [], [], [2], [], [2], [2], [2]]
// Output
// [null, 0, 1, true, 2, false, null, true]

// Explanation
// PhoneDirectory phoneDirectory = new PhoneDirectory(3);
// phoneDirectory.get();      // It can return any available phone number. Here we assume it returns 0.
// phoneDirectory.get();      // Assume it returns 1.
// phoneDirectory.check(2);   // The number 2 is available, so return true.
// phoneDirectory.get();      // It returns 2, the only number that is left.
// phoneDirectory.check(2);   // The number 2 is no longer available, so return false.
// phoneDirectory.release(2); // Release number 2 back to the pool.
// phoneDirectory.check(2);   // Number 2 is available again, return true.


/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
  this.emptySlot = [];
  for(let i=0; i<maxNumbers; i++){
    this.emptySlot.push(i);
  }
  this.pd = {};
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
  if(!this.emptySlot.length) return -1;
  const number = this.emptySlot.shift();
  this.pd[number] = true;
  return number;
};

/**
 * Check if a number is available or not. 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
  return !this.pd[number];
};

/**
 * Recycle or release a number. 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
  if(!this.pd[number]) return null;
  delete this.pd[number];
  this.emptySlot.unshift(number);
  return null;
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */

// ["PhoneDirectory","release","get","release","release","get","get","check","get","release","get","release","release","get","check","release"] 
// [[3],              [2],      [],    [2],      [0],     [],    [],   [1],   [],    [0],      [],     [0],    [0],      [],   [1],    [1]]
// [null,              null,     0,     null,     null,    1,     0,    false, 2,     null,     0,      null,   null,     0,    false,  null]
