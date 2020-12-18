/**
 * Check is singly link list is pelindrome
 * Time complexity O(n)
 * The idea is to use function call stack as container. Recursively traverse till the end of list. 
 * When we return from last NULL, we will be at last node.
 * The last node to be compared with first node of list.
 * In order to access first node of list, we need list head to be available in the last call of recursion.
 * Hence we pass head also to the recursive function. If they both match we need to compare (2, n-2) nodes.
 * Again when recursion falls back to (n-2)nd node, we need reference to 2nd node from head. 
 * We advance the head pointer in previous call, to refer to next node in the list.
 */



{

  function Node(data){
    this.next = null;
    this.data = data;
  }
  
  function isPalindrome(left, right = left) {
    if(!right) return true;
    let result = isPalindrome(left, right.next);
    if(result){
      if(left.data === right.data) {
        result = true;
        left = left.next;
      } else {
        result = false;
      }
    }
    return result;  
  }
}
//----------------------------------------------


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
