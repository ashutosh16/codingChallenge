// Generate Expression Tree with given expression
// Time COmplexity O(n);

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
    
    stack.length && ProcessStack();

    return currentNode;
  }

  let tree = CreateEpressionTree('( 5 + 3 + ( 10 * 20 ) + 5 )');
  
  //          +
  //         / \
  //        5   +     
  //           / \
  //          3   + 
  //             / \
  //            *   5
  //           / \
  //          10 20   
   
  let tree = CreateEpressionTree('( 5 + 3 ) + ( 10 * 20 ) + 5 '); //This program failed here.
 
  //           +     
  //         /   \
  //       +      + 
  //     /  \    / \
  //    5    3  *   5
  //           / \
  //          10 20 
  
  let tree2 = CreateEpressionTree('( 3 + ( ( 5 + 9 ) * 2 ) )');
  console.log(tree2);
}
