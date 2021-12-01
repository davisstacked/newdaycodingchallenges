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
