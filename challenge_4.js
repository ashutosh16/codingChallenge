class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor(){
    this.head = null;
  }

  addNode(data) {
    let newNode = new Node(data);
    if(this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return newNode;
  }

  deleteNthNodeFromLast(n){
    let traversal = this.head ,
      nthNode = this.head,
      index = 1,
      length = 1,
      removeNode = null;
    
    if(this.head === null)
      return null;

    while (traversal.next !== null) {
      if(index <= n){
        index ++;
      } else {
        nthNode = nthNode.next;
      }
      traversal = traversal.next; 
      length++;
    }
    if(nthNode === this.head) {
      if(length === n) {
        // delete head node
        removeNode = this.head;
        this.head = this.head.next;  
      } else
      if(n > length) {
        return null;
      }
    } else {
      removeNode = nthNode.next;
      nthNode.next = nthNode.next.next;
    }
    return removeNode.data;
  }
}

var LL = new LinkList();
LL.addNode(60);
LL.addNode(50);
LL.addNode(40);
LL.addNode(30);
LL.addNode(20);
LL.addNode(10);

var deletedNode = LL.deleteNthNodeFromLast(1);

console.log(`Deleted Node ${deletedNode}`);

console.log(LL);


