// 1. Detect loop in a linked list
//    1. start slow and fast till start === fast
// 2. Remove Loop in a Linked List
//    1. Find size of the loop
//    2. Find starting point of the loop
//    3. Loop from loopStartingPoint and make pre of loopStartingPoint as null
{
  function Node(data) {
    this.next = null;
    this.data = data;
  }
  
  function IsLoopInLinkList(head) {
    if(!head) return false;
    let slow = head,
        fast = head.next;

    while( fast !== null && slow !== fast) {
      slow = slow.next;
      fast = (fast.next) ? fast.next.next : null;
    }
    
   return (slow && fast && slow === fast) ? true : false;
  }
  
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  
  head.next.next.next.next.next = head.next;
  let p = head;
  
  console.log(IsLoopInLinkList(head));
  
}
