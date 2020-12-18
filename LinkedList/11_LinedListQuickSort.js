/** 
 * Quick sort to sort the linked list
 * Time complexity is O(n*log(n))
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

    partition(left, right) { //consider given lined list is from left to right
      let p = null,
        c = left,
        tail = right,
        pivot = right.data;
      while(c !== right) {
        if(c.data > pivot) { //move current node at end of the given linked list
          // current node is head node
          if (this.head === c) {
            this.head = this.head.next;
          }
          if(left === c) {
            left = left.next;
          }

          if(p) {
            p.next = c.next;
          }
          p = c.next;
          c.next = tail.next;
          tail.next = c;
          tail = tail.next;
          c = p;

        } else {
          p = c;
          c = c.next;
        }
        
      }
      return {
        'pivot': p,
        left,
        right : tail
      };
    }

    quickSort(left = this.head, right) {
      if(!right) {
        right = left;
        while(right.next !== null) {
          right = right.next;
        }
      }

      if(left === right){
        return true;
      } else {
        let partitionObj = this.partition(left, right);
        let l1 = partitionObj.left,
          l2 = partitionObj.pivot.next,
          r2 = partitionObj.right,
          r1 = partitionObj.left;

        while (r1 !== partitionObj.pivot && r1.next !== partitionObj.pivot) {
          r1 = r1.next;
        }

        this.quickSort(l1, r1);
        this.quickSort(l2, r2);
      }
    }

  }

  let ll = new LinkList();
  
  ll.addNode(30);
  ll.addNode(50);
  ll.addNode(10);
  ll.addNode(60);
  ll.addNode(20);
  ll.addNode(40);

  ll.quickSort();
  debugger;
  // input : 40->20->60->10->50->30
  // output: 10->20->30->40->50->60
}
