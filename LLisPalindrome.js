/**
 * Check is singly link list is pelindrome
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
      if(this.head === null) {
        this.head = new Node(data);
      } else {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
      }
    }

    isPalindrome(right = this.head) {

      if(!this.left) {
        this.left = this.head;
      }

      let result;
      if (right === null) return true;

      result = this.isPalindrome(right.next);


      if (result && this.left.data === right.data) {
        result = true;
        this.left = this.left.next;
      }

      return result;
    }

    
  }
  let left;
  function isPalindrome(right) {debugger;
    let result;
    if(right === null) return true;

    result = this.isPalindrome(right.next);
    

    if (result && left.data === right.data) {
      result = true;
      left = left.next;
    }

    return result;
  }

  let ll = new LinkList();
  ll.addNode('A');
  ll.addNode('B');
  ll.addNode('C');
  ll.addNode('B');
  ll.addNode('A');
  left = ll.head;
  // isPalindrome(ll.head, left);
  ll.isPalindrome();
}

{

  function abc(a=[], c=3) {
    debugger;
    
    if (c) { 
      c--; 
      abc(a, c); 
    }
    a.push('a');
    return a;
  }

  abc();


}