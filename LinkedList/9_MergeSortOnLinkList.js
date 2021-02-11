// Merge Sort for Linked Lists
// Given the head of a linked list, return the list after sorting it in ascending order.
// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
// https://www.youtube.com/watch?v=j_UNYW6Ap0k
// https://leetcode.com/problems/sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Need to complete the solution.
var sortList = function(head) {
    return MergeSort(head);
};

function MergeSort(head){
  
  if(!head || !head.next) return head;
  
  let mid = head;
  let fast = head.next;
  while(fast && fast.next !== null) {
    mid = mid.next;
    fast = fast.next.next;
  }
  
  let head2 = mid.next;
  mid.next = null;
  
  let l1 = head ? MergeSort(head): null;
  let l2 = head2 ? MergeSort(head2) : null;
  
  return (l1 && l2) ? Merge(l1, l2) : l1 ? l1 : l2;
}

function Merge(h1, h2){
  let resultHead = (h1.val <= h2.val) ? h1 : h2;
  while(h1.val <= h2.val)
  while(h1 && h2) {
    if(h1.val <= h2.val) {
      let temp = h1.next;
      h1.next = h2;
      h1 = temp;
    } else {
      let temp = h2.next;
      h2.next = h1;
      h2 = temp;
    }
  }
  return resultHead;
}


