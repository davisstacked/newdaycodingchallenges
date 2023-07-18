// tree traversal
const BFS = (node) => {
  const queue = [];
  const visited = [];
  queue.push(node);
  while (queue.length) {
    let currentNode = queue.shift();
    visited.push(currentNode);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) { queue.push(currentNode.right);}
  }
  return visited;
};
