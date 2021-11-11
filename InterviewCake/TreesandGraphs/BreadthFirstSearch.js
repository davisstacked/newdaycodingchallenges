// BFS
// Steps - Iteratively

// Create a queue (this can be an array) and a variable to store the values of nodes visited.

const breadthFirstSearch = (tree) => {
  // create a queue (this can be an array) and a variable to store the values of the nodes visited. 
  const queue = [];
  const visitedValues = [];
  const node = tree.root;
  // place the root node in the queue
  queue.push(tree.root)
  // loop as long as there is anything in the queue
  while (queue.length) {
    // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
    // If there is a left property on the node dequeued - add it to the queue
    // If there is a right property on the node dequeued - add it to the queue
    node = queue.shift();
    visitedValues.push(node);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return visitedValues;
}