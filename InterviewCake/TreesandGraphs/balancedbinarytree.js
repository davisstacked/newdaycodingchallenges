// Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).

// A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

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


const isBalanced = (treeRoot) => {

  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }

  const depths = []; // We short-circuit as soon as we find more than 2

  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {
    
    // pop a node and its depth from the top of our stack (last element in the array)
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      
      // Case: we found a leaf
      // We only care if it's a new depth
      // if this node isn't in the array.
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // Two ways we might now have an unbalanced tree:
        // 1) More than 2 different leaf depths
        // 2) 2 leaf depths that are more than 1 apart
        if (
          (depths.length > 2)
          || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
      }  else {
        // Case: this isn't a leaf - keep stepping down
        if (node.left) {
          nodes.push([node.left, depth + 1]);
        }
        if (node.right) {
          nodes.push([node.right, depth + 1])
        }
    }
  }
  return true;
}

// O(n) time and O(n) space