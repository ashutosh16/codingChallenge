/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
  this.queue = [];
  this.map = {};
  for(let i=0; i<nums.length; i++) {
    this.add(nums[i]);
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() { 
    while(this.queue.length && this.map[this.queue[0]] > 1) {
      this.queue.shift();
    }
    return this.queue.length ? this.queue[0] : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  this.map[value] =  this.map[value] ?  this.map[value]+1 : 1;
  this.queue.push(value);
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
