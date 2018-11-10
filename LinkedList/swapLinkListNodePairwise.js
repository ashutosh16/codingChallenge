/**
 * Pairwise swap elements of the Linked list.
 * Time complexity O(n)
 */



{
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkList {
    constructor() {
      this.head = null;
    }

    addNode(data) {
      if (this.head === null) {
        this.head = new Node(data);
      } else {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
      }
    }

    pairewiseSwap() {debugger;
      let c =  this.head,
        prev = null;
      while(c !== null && c.next !== null) {
        if(c === this.head) {
          this.head = c.next;
        }

        let temp = c.next;
        c.next = c.next.next;
        temp.next = c;
        if (prev) {
          prev = temp;
        }
        prev = c;
        c = c.next; 
      }
    }

  }

  let ll = new LinkList();
  ll.addNode('E');
  ll.addNode('D');
  ll.addNode('C');
  ll.addNode('B');
  ll.addNode('A');
  ll.pairewiseSwap();
  // input : A->B->C->D->E
  // output: B->A->D->C->E
}