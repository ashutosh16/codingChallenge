// Reverse a linked list
// Time Complexity is O(n)
// Space Complexity is O(n)
{
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  class LinkList {
    constructor(val) {
      this.head = (typeof val !== 'undefined') ? new Node(val) : null;
      this.length = (typeof val !== 'undefined') ? 1 : 0;
    }

    add(val) {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }

    print() {
      let result = 'Head ',
        p = this.head;
      while (p !== null) {
        result += ' ---> ' + p.val ;
        p = p.next;
      }
      return result
    }

    reverse () {
      let current = this.head,
        pre = null,
        next = null;

      while(current !== null) {
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
      }
      this.head = pre;
      return this;
    }
  }

  let ll = new LinkList();
  ll.add(5);
  ll.add(4);
  ll.add(3);
  ll.add(2);
  ll.add(1);
  console.log(ll.print());
  console.log(ll.reverse().print());
}
