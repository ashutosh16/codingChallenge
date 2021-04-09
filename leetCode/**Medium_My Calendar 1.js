// Implement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.
// https://leetcode.com/problems/my-calendar-i/

// Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), 
// the range of real numbers x such that start <= x < end.
// A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)

// For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. 
// Otherwise, return false and do not add the event to the calendar.

// Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

// Example 1:
// MyCalendar();
// MyCalendar.book(10, 20); // returns true
// MyCalendar.book(15, 25); // returns false
// MyCalendar.book(20, 30); // returns true

// Explanation: 
// The first event can be booked.  The second can't because time 15 is already booked by another event.
// The third event can be booked, as the first event takes every time less than 20, but not including 20.

// HINT: TREE - Implement a Tree structure each node { start: sTime, end: eTime, left: previousBokkingNode, right: afterBookingNode}

class Node {
  constructor(start, end){
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
  }
  
  insert(node) {
    if(node.start === this.start) return false;
    if(node.end <= this.start) {
      if(!this.left) {
        this.left = node;
        return true;
      }
      return this.left.insert(node);
    } else if(this.end <= node.start){
      if(!this.right) {
        this.right = node;
        return true;
      }
      return this.right.insert(node);
    } else {
      return false;
    }
  }
}


var MyCalendar = function() {
    this.root = null;
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let node = new Node(start, end);
    if(!this.root) {
      this.root = node;
      return true;
    }
    return this.root.insert(node);
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
 
var calender = new MyCalendar();
calender.book(10,20);
//true

calender.book(15,25);
//false

calender.book(20,30);
//true


 
