class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor(val) {
    this.head = val ? new Node(val) : null;
  }
  
  addNode(val) {
    if(this.head === null) {
      this.head = new Node(val);
    } else {
      let temp = this.head;
      while(temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(val);
    }
  }

  reverseTravel(){
    let current = null, previous = this.head;
    while(current !== this.head) {
      previous = this.head;
      while (previous.next !== current){
        previous = previous.next;
      }
      // if(current !== null) {
        console.log(previous.val);
      // }
      current = previous;
    }
  }
}

var l = new LinkList(1);
l.addNode(2);
l.addNode(3);
l.addNode(4);
l.addNode(5);
l.reverseTravel();

