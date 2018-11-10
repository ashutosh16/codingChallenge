// Check sum of Covered and Uncovered nodes of Binary Tree
// For calculating sum of Uncovered nodes we will follow below steps:
// 1) Start from root, go to left and keep going until left child is available, if not go to right child and again follow same procedure until you reach a leaf node.

// 2) After step 1 sum of left boundary will be stored, now for right part again do the same procedure but now keep going to right until right child is available, if not then go to left child and follow same procedure until you reach a leaf node