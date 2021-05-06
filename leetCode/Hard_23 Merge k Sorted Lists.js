// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const merge = (a,b)=>{
    const result = new ListNode(0, null); // Just added dummy node to avoid result null check. 
    let p = result;
    while(a && b) {
      if(a.val <= b.val) {
        p.next = a;
        a = a.next;
      } else {
        p.next = b;
        b = b.next;
      }
      p = p.next;
    }
    
    while(a) {
      p.next = a;
      a = a.next;
      p = p.next;
    }
    while(b) {
      p.next = b;
      b = b.next;
      p = p.next;
    }
    //return result.next to remove dummy node while return.
    return result.next;
  }
  
  const mergeList = (list, left=0, right=list.length-1)=>{
    if(left >= right) return list[left];
    
    const mid = Math.floor((left+right)/2);
    const m1 = mergeList(list, left, mid);
    const m2 = mergeList(list, mid+1, right);
    return merge(m1, m2);
  }
  return mergeList(lists) || null;
};



