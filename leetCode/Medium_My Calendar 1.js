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
 
 ["MyCalendar","book","book","book"]
[[],[10,20],[15,25],[20,30]]
 
