// Implement a SnapshotArray that supports the following interface:
// https://leetcode.com/problems/snapshot-array/

// SnapshotArray(int length) initializes an array-like data structure with the given length.  Initially, each element equals 0.
// void set(index, val) sets the element at the given index to be equal to val.
// int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
// int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id
 
// Example 1:

// Input: ["SnapshotArray","set","snap","set","get"]
// [[3],[0,5],[],[0,6],[0,0]]
// Output: [null,null,0,null,5]
// Explanation: 
// SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
// snapshotArr.set(0,5);  // Set array[0] = 5
// snapshotArr.snap();  // Take a snapshot, return snap_id = 0
// snapshotArr.set(0,6);
// snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.currentSnapId  = 0;
    this.snapList = [];
    for(let i=0; i < length; i++){
      // SnapId is 0 and value for the field is 0;
      this.snapList.push({0:0});
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    if(index < this.snapList.length) {
      this.snapList[index][this.currentSnapId] = val;
    }  
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    let snapId = this.currentSnapId;
    this.currentSnapId = snapId + 1;
    return snapId;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let i = snap_id;
    while(i>=0) {
      let val = this.snapList[index][i];
      if(typeof val !== 'undefined') {
        return val;
      }
      i--;
    }
};


// Your SnapshotArray object will be instantiated and called as such:
var obj = new SnapshotArray(2)
obj.set(0,12);
var snap0 = obj.snap(); //0
var snap1 = obj.snap(); //1
obj.get(1,0); //0
obj.get(1,0); //0
var snap2 = obj.snap(); //2
var snap3 = obj.snap(); //3



// ["SnapshotArray","set", "snap","snap","get", "get", "snap","snap"]
// [[2]            ,[0,12],[].   ,[].   ,[1,0], [1,0], [].   ,[]]
// [null,           null,  0,     1.     ,0.    ,0.    ,2.   ,3]
