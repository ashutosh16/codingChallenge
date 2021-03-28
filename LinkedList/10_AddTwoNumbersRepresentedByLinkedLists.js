// Add 2 numbers represented by link list.
// Add Link list


class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class LinkList {
  constructor(val){
    this.head = (typeof val !== 'undefined') ? new Node(val) : null;
    this.length = (typeof val !== 'undefined') ? 1 : 0;
  }
  
  add(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  print(){
    let result = '',
      p = this.head;
    while(p !== null){
      result += p.val;
      p = p.next;
    }
    return result
  }
}


function _AddLinkList(l1, l2, result, carry){
  if (l1.next !== null && l2.next !== null) {
    carry = _AddLinkList(l1.next, l2.next, result, carry);
  }
  let sum = 0;

  sum = l1.val + l2.val + carry;
  resultDigit = sum % 10;
  carry = Math.floor(sum/10);
  result.add(resultDigit);
  
  return carry;
}

function add(l1, l2){
  let result = new LinkList(),
    carry = 0;
  if(l1.length === l2.length) {
    carry = _AddLinkList(l1.head, l2.head, result, carry);
    if (carry !== 0) {
      result.add(carry);
    }
  } else {
    // bring pointers to same length 
    // then call carry = _AddLinkList(l1.head, l2.head, result, carry);
    // prapogateCarry(l1, remainingDigitLength)
  }

  console.log(result.print());
  return result;
}


let d1 = new LinkList();
let d2 = new LinkList();

d1.add(3); d1.add(6); d1.add(5); //563
d2.add(8); d2.add(4); d2.add(2); //248
add(d1, d2); //811


d1 = new LinkList();
d2 = new LinkList();

d1.add(3); d1.add(6); d1.add(5); //563
d2.add(2); d2.add(4); d2.add(8); //248
add(d1, d2); //1405
