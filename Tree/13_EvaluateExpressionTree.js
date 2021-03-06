// Evaluation of Expression Tree

{
  function Node (data){
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function calculate(op, num1, num2) {
    result = 0;
    switch (op) {
      case '+': 
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 /num2;
        break;
      case '%':
        result = num1 % num2;
        break;
    }
    return result;
  }

  function Evaluation(root) {
    if (!root.left && !root.right) {
      return root.data;
    }

    if(!!root.left && !!root.right) {
      let leftResult = Evaluation(root.left),
        rightResult = Evaluation(root.right);
      
      return (typeof leftResult === "number" && typeof rightResult === "number") 
              ? calculate(root.data, leftResult, rightResult)
              : false;
    } else {
      return false; //Invalid tree
    } 
  }

  let tree = new Node('+');
  tree.left = new Node('*');
  tree.right = new Node('-');
  tree.right.right = new Node(20);
  tree.right.left = new Node(100);

  tree.left.right = new Node(4);
  tree.left.left = new Node(5);
  
  
//                 +
//               /    \
//              *      -
//             / \    /  \
//            5   4 100  20
  
  console.log(Evaluation(tree));
}
