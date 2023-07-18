// tree traversal
// DFS - preorder - first node, then all the lefts to the bottom, then the rights from the bottom
const DFS = (node) => {
  const visited = [];
  let current = node; 
  
  const traverse = (currentNode) => {
    visited.push(currentNode.value);
    if (currentNode.left) traverse(currentNode.left)
    if (currentNode.right) traverse(currentNode.right)
    }
  
  traverse(current);
  return visited;
}