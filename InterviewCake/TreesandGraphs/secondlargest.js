// Write a function to find the 2nd largest element in a binary search tree. ↴

// Here's a sample binary tree node class:

  class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// you'd need to keep track of the largest element you've seen yet. 
// also keep track of second largest element.
// return largest element. 

// Function to find the largest value AKA - the rightmost value 
// using recursion 
  function findLargest(rootNode) {
    if (!rootNode) {
      throw new Error('Tree must have at least 1 node');
    }
    if (rootNode.right) {
      return findLargest(rootNode.right);
    }
    return rootNode.value;
  }

// function to find the second largest when largest right has a left subtree
function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  // Case: we're currently at largest, and largest has a left subtree,
  // so 2nd largest is largest in said subtree
  if (rootNode.left && !rootNode.right) {
    return findLargest(rootNode.left);
  }

  // Case: we're at a parent of largest, and largest has no left subtree,
  // so second largest must be current node
  if (rootNode.right && !rootNode.right.left && !rootNode.right.right) {
    return rootNode.value;
  }

  // otherwise: step right
  return findSecondLargest(rootNode.right);
  
}

// Non-recursive solution to get constant space instead of O(h) where h is height of tree.

// Solution
// We start with a function for getting the largest value. The largest value is simply the "rightmost" one, so we can get it in one walk down the tree by traversing rightward until we don't have a right child anymore:

function findLargest(rootNode) {
  let current = rootNode;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

// With this in mind, we can also find the second largest in one walk down the tree. At each step, we have a few cases:

// If we have a left subtree but not a right subtree, then the current node is the largest overall (the "rightmost") node. The second largest element must be the largest element in the left subtree. We use our findLargest() function above to find the largest in that left subtree!
// If we have a right child, but that right child node doesn't have any children, then the right child must be the largest element and our current node must be the second largest element!
// Else, we have a right subtree with more than one element, so the largest and second largest are somewhere in that subtree. So we step right.

  function findLargest(rootNode) {
    let current = rootNode;
    while (current) {
      if (!current.right) return current.value;
      current = current.right;
    }
  }

function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }
  
  let current = rootNode;

  while (current) {
    // Case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    // Case: current is parent of largest, and largest has no children,
    // so current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}


// We're doing one walk down our BST, which means O(h) time, where h is the height of the tree (again, that's O(lg{n}) if the tree is balanced, O(n) otherwise). O(1) space.