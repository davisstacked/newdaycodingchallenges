// tree traversal
// DFS - in-order
// in in-order the root node is the last one visited/recorded.
const DFS = (node) => {
  const visited = [];
  let current = node;

  const traverse = (currentNode) => {
    if (currentNode.left) traverse(currentNode.left);
    visited.push(currentNode.value);
    if (currentNode.right) traverse(currentNode.right);
  };
  traverse(current);
  return visited;
};
