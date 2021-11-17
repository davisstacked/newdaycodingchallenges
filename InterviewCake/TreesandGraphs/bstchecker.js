// Write a function to check that a binary tree ↴ is a valid binary search tree. ↴

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

// Solution
// We do a depth-first walk through the tree, testing each node for validity as we go. If a node appears in the left subtree of an ancestor, it must be less than that ancestor. If a node appears in the right subtree of an ancestor, it must be greater than that ancestor.

// Instead of keeping track of every ancestor to check these inequalities, we just check the largest number it must be greater than (its lowerBound) and the smallest number it must be less than (its upperBound).

function isBinarySearchTree(treeRoot) {

  // Start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.NEGATIVE_INFINITY,
  });

  // Depth-first traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // If this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      // This node must be less than the current node
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }

    if (node.right) {

      // this node must be greater than the current node
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }
  // if none of the nodes were invalid, return true
  // at this point we have checked all nodes
  return true;
}

// or we can write a recursive function that uses the callstack. This would work, but it would be vulnerable to stack overflow. However, the code does end up quite a bit cleaner. 


function isBinarySearchTree(treeRoot, lowerBound, upperBound) {
  lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : Number.NEGATIVE_INFINITY;
  upperBound = (typeof upperBound !== 'undefined') ? upperBound : Number.POSITIVE_INFINITY;

  if (!treeRoot) return true;

  if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
    return false;
  }

  return ifBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value)
    && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);

}


