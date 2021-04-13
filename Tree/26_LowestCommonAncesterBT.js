// Find the lowest common ancester in Binary Tree
// https://www.youtube.com/watch?v=13m9ZCB8gjw&list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu&index=17
{
    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    function find(node, a, b) {
        if (!node) return null;
        let foundA = null,
            foundB = null;
        (node.data === a) && (foundA = true);
        (node.data === b) && (foundB = true);

        let leftResult = find(node.left, a, b);
        // leftResult is not null
//         1. either found A (if leftResult === a)
//         2. or found B (if leftResult === b)
//         3. found common ancester (if leftResult !== a && leftResult !== b)
        if (!!leftResult) {
            if (leftResult !== a && leftResult !== b) { 
                return leftResult;
            }
            (leftResult === a) && (foundA = true);
            (leftResult === b) && (foundB = true);
            
            if (foundA && foundB) {
                return node.data;
            }
        }

        let rightResult = find(node.right, a, b);
        if (!!rightResult) {
            if (rightResult !== a && rightResult !== b) {
                return rightResult;
            }
            (rightResult === a) && (foundA = true);
            (rightResult === b) && (foundB = true);
            // When found both a and b return current node as current node is common ancester.
            return (foundA && foundB) ? node.data : rightResult; 
        }

        if (foundA || foundB) {
            return foundA ? a : b; // When found a || b then return found node a or b.
        } else {
            return null; // When found nothing return null
        }
    }

    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.left.left.right = new Node(6);

    console.log(find(root, 6, 5));
    //Output 2
}
