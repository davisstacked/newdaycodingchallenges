// Depth First Search 

// Steps - recursively

// PREORDER
const DFSPreOrder = (BST) => {
  // order read This - Left - Right
  
  // Create a variable to store the values of nodes visited
  const nodeValues = [];
  // Store the root of the BST in a variable called current
  const current = BST.root;
  
  // Write a helper function which accepts a node
  const traverse = (node) => {
    // Push the value of the node to the variable that stores the values
    nodeValues.push(node.value);
    // If the node has a left property, call the helper function with the left property on the node
    if (node.left) traverse(node.left);
    // If the node has a right property, call the helper function with the right property on the node. 
    if (node.right) traverse(node.right);
  }
  
  // Invoke helper function with the current variable
  traverse(current);
  // Return the array of values
  return nodeValues;
}

// POSTORDER
// read data - L - R - This
const DFSPostOrder = (BST) => {
  // Create a variable to store the values of nodes visited
  const nodeValues = [];

  // Store the root of the BST in a variable called current
  const current = BST.root;

  // Write a helper function which accepts a node
  const traverse = (node) => {
    // If the node has a left property, call the helper function with the left property on the node
    if (node.left) traverse(node.left);
   // If the node has a right property, call the helper function with the right property on the node. 
    if (node.right) traverse(node.right);
    // Push the value of the node to the variable that stores the values
    nodeValues.push(node.value);
  }

  traverse(current);
  return nodeValues;
}

// IN ORDER
// read data L - this - R
const DFSInOrder = (BST) => {

  // Create a variable to store the values of nodes visited
  const nodeValues = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    nodeValues.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(BST.root)
} 

