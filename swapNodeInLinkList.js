/**
 * Swap node in link-list without swiping data.
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
    
    swap(data1, data2) {debugger;
      let px = null,
        cx = this.head,
        py = null,
        cy = this.head;

      while(cx && cx.data !== data1){
        px = cx;
        cx = cx.next;
      }

      while (cy && cy.data !== data2) {
        py = cy;
        cy = cy.next;
      }

      //Node not present in LinkList.
      if(cx === null || cy === null) {
        console.log('node not present');
        return false;
      }

      if(cx === this.head) {
        this.head = cy;
      }

      if(cy === this.head) {
        this.head = cx;
      }

      if (px) {
        px.next = cy;
      }

      if (py && py !== cx) { //Only if node are not adjusent.
        py.next = cx; 
      } 

      let temp = cy.next;
      if (cx.next !== cy) { //Only if node are not adjusent.
        cy.next = cx.next;
      } else {
        cy.next = cx;
      }
      cx.next = temp;

      console.log(this.head);

    }

  }

  let ll = new LinkList();
  ll.addNode('E');
  ll.addNode('B');
  ll.addNode('C');
  ll.addNode('D');
  ll.addNode('A');
  ll.swap('B', 'D');
  // input : A->D->C->B->E
  // output: A->B->C->D->E
  
  let ll2 = new LinkList();
  ll2.addNode('E');
  ll2.addNode('C');
  ll2.addNode('D');
  ll2.addNode('B');
  ll2.addNode('A');
  ll2.swap('C', 'D');
  // input : A->B->D->C->E
  // output: A->B->C->D->E  


  let ll3 = new LinkList();
  ll3.addNode('E');
  ll3.addNode('A');
  ll3.addNode('C');
  ll3.addNode('B');
  ll3.addNode('D');
  ll3.swap('A', 'D');
  // input : D->B->C->A->E
  // output: A->B->C->D->E


}