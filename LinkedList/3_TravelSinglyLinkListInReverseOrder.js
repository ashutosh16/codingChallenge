// Travel link list in reverse order.

function Travel(ll){
  if(ll.next) {
    Travel(ll.next);
  }
  console.log(ll.data);
}

function Node(data) {
  return {
    data,
    next: null
  }
}

const ll = Node(1);
ll.next =  Node(2);
ll.next.next =  Node(3);
ll.next.next.next =  Node(4);
ll.next.next.next.next =  Node(5);
Travel(ll);

// 5
// 4
// 3
// 2
// 1

----------------------------------------------------------------------------------------------------------------------------------------------------------------











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

//Solution 2

function Node (data) {
	return {
	  data : data,
	  next : null
	};
}

function Travel(head) {
	if(head.next !== null){
		Travel(head.next);
  } 
  console.log(head.data);
}


let head = Node(1);
head.next = Node(2);
head.next.next = Node(3);
head.next.next.next = Node(4);
head.next.next.next.next = Node(5);

Travel(head);

