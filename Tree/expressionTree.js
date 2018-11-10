// Generate Expression Tree
// Time COmplexity O(n);

{ 
  function Node(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }

  function CreateEpressionTree(expStr) {debugger;
    let stack = [],
      currentNode = null,
      str = expStr.split(' ');

    for(let i = 0; i < str.length; i++) {
      if(str[i] !== ')') {
        if(str[i] === '(') {
          stack.push(str[i]);
        } else {
          stack.push(new Node(str[i]));
        }
      } else {
        let isOpenBracket = false;
        while (stack.length !== 0 && !isOpenBracket) {
          let a = stack.pop();
          if(a !== '(' && stack.length > 0) {
            let b = stack.pop();
            if(!currentNode) {
              currentNode = stack.pop();
            }

            if('+-*/%'.indexOf(b.data) > -1) {
              b.left = currentNode;
              b.right = a;
              currentNode = b;
            } else {
              a.right = currentNode;
              a.left = b;
              currentNode = a;
            }
            
          } else {
            isOpenBracket = true;
          }
        }
        
      }
    }

    return currentNode;
  }

  let tree = CreateEpressionTree('( 5 + 3 + ( 10 * 20 ) + 5 )');
  let tree2 = CreateEpressionTree('( 3 + ( ( 5 + 9 ) * 2 ) )');
  console.log(tree2);
}