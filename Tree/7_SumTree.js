// Check if a given Binary Tree is Sum Tree

{
  function Node (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function checkSum(root) {
    if(!root) return { sum: 0, isSum: true };
    if ((!root.left && !root.right)) return { sum: root.data, isSum: true };
    
    let leftResult, rightResult;
    
    leftResult = checkSum(root.left);
    rightResult = checkSum(root.right);

    if(leftResult.isSum && rightResult.isSum) {
      return {
        isSum: (root.data === (leftResult.sum + rightResult.sum)),
        sum: (root.data + leftResult.sum + rightResult.sum)
      };
    }
    return { isSum: false };
  }

  let root = new Node(26);
  root.left = new Node(10);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(6);
  root.right.right = new Node(3);
  console.log(checkSum(root));

  //Input
  /*         26        */
  /*       /    \      */
  /*     10      3     */
  /*    /  \   /  \    */
  /*   4    6      3   */
  // Output: True

}
