/**
 * Delete all occurrences of a given key in a linked list
 */

{
  
  function Node(data) {
    return {
      data,
      next :null
    };
  }

  function Delete(head, key) {
    if(head === null) return head;
    
    let i = head;
    while(i.next !== null) {
      if(i.next.data === key) {
        i.next = i.next.next;
      } else {
        // Only increment i in else part otherwise it will ignore to check the index next to deleted index
        i = i.next;
      }
    }
    if(head.data === key) {
        head = head.next;
    }
    return head;
  } 
  
  const head = Node(1);
  
  head.next = Node('*');
  head.next.next = Node('*');
  head.next.next.next = Node(2);
  head.next.next.next.next = Node('*');
  head.next.next.next.next.next = Node(3);
  head.next.next.next.next.next.next = Node('*');
  
  Delete(head, '*');
  
  
  
}
