// Generate Expression Tree with given expression
// Time COmplexity O(n);

// ( 5 + 3 + ( 10 * 20 ) + 5 )
// 1. for loop to expression 
// 2. puch each node in stact untill close bracket
// 3. If close bracket process the stack.
// 4. Stack process
// 4.1. while open bracket or stack.length > 0
// 
//
//             if('+-*/%'.indexOf(b.data) > -1 && b.left === null && b.right === null) {
//               b.left = currentNode;
//               b.right = a;
//               currentNode = b;
//             } else {
//               a.right = currentNode;
//               a.left = b;
//               currentNode = a;
//             }


{ 
  function Node(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }

  function CreateEpressionTree(expStr) {
    let stack = [],
      currentNode = null,
      str = expStr.split(' ');
    
    const ProcessStack = () => {
      let isOpenBracket = false;
        while (stack.length !== 0 && !isOpenBracket) {
          let a = stack.pop();
          if(a !== '(' && stack.length > 0) {
            let b = stack.pop();
            if(!currentNode) {
              currentNode = stack.pop();
            }

            if('+-*/%'.indexOf(b.data) > -1 && b.left === null && b.right === null) {
              b.left = currentNode;
              b.right = a;
              currentNode = b;
            } else {
              a.right = currentNode;
              a.left = b;
              currentNode = a;
            }
            
          } else {
            currentNode && (stack.push(currentNode));
            currentNode = null;
            isOpenBracket = true;
          }
        }
        //If loop break because of stack is over. This required for tree2 in below example.
        !stack.length && stack.push(currentNode);
    } 

    for(let i = 0; i < str.length; i++) {
      if(str[i] !== ')') {
        if(str[i] === '(') {
          stack.push(str[i]);
        } else if(str[i].trim() !== ''){
          stack.push(new Node(str[i]));
        }
      } else {
        ProcessStack();
      }
    }
    
    if(stack.length > 1) {
      ProcessStack();
    }
    return stack.pop();
  }

  let tree1 = CreateEpressionTree('( 5 + 3 + ( 10 * 20 ) + 5 )');
  console.log(tree1);
  //          +
  //         / \
  //        5   +     
  //           / \
  //          3   + 
  //             / \
  //            *   5
  //           / \
  //          10 20   
   
  let tree2 = CreateEpressionTree('( 5 + 3 ) + ( 10 * 20 ) + 5 '); 
  console.log(tree2);
 
  //           +     
  //         /   \
  //       +      + 
  //     /  \    / \
  //    5    3  *   5
  //           / \
  //          10 20 
  
  let tree3 = CreateEpressionTree('( 3 + ( ( 5 + 9 ) * 2 ) )');
  console.log(tree3);
   
  //           +     
  //         /   \
  //        3     * 
  //             / \
  //            +   2
  //           / \
  //          5   9 
  
}
