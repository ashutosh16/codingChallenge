// 1. Detect loop in a linked list
//    1. start slow and fast till start === fast
// 2. Remove Loop in a Linked List
//    1. Find size of the loop
//    2. Find starting point of the loop
//    3. Loop from loopStartingPoint and make pre of loopStartingPoint as null

slow = head;
fast = slow.next;
while(fast !== null || slow !== fast){
  slow = slow.next
  fast = fast.next.next;
}
if(fast === null) {
  return false
} else {
  // Loop detected. 
  // Find size of the loop
  // Fast & slow may not be starting at the loop

}
