// find level of given node 

{
  function findLevel(root, key, currentLevel = 1) {
    debugger;
    let foundLevel = -1;
    if(root.data === key) {
      return currentLevel;
    } else {
      if (!!root.left) {
        foundLevel = findLevel(root.left, key, currentLevel + 1);
      }
      
      if (foundLevel === -1 && !!root.right) {
        foundLevel = findLevel(root.right, key, currentLevel + 1);
      } 

      return foundLevel;
    }
  }

  let root = new Node(26);
  root.left = new Node(10);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(6);
  root.right.right = new Node(13);
  console.log(findLevel(root, 6)); //3
  console.log(findLevel(root, 3)); //2
  console.log(findLevel(root, 13)); //3
  console.log(findLevel(root, 1)); //-1

  //Input
  /*         26        */
  /*       /    \      */
  /*     10      3     */
  /*    /  \   /  \    */
  /*   4    6      3   */
  



}