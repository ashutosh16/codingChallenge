// Print Postorder traversal from given Inorder and Preorder traversals

{

  function _printPostorder(inorder, preorder, in_start, in_end) {
    var root = inorder.indexOf(preorder[0]);
    if (root === -1) return false;

    if (root !== 0 && root !== in_start) {
      debugger;
      _printPostorder(inorder, preorder.slice(1), (in_start), root - 1);
    }

    if (root !== (inorder.length-1) ) {
      _printPostorder(inorder.slice(root+1), preorder.slice(root+1), (root + 1), in_end);
    }

    console.log(preorder[0]);

  }
  var inorder = [4, 2, 5, 1, 3, 6];
  var preorder = [1, 2, 4, 5, 3, 6];
  _printPostorder(inorder, preorder, 0, inorder.length - 1, 0);

}
// Output
// 6
// 5
// 4
// 3
// 5
// 2
// 6
// 3
// 1
