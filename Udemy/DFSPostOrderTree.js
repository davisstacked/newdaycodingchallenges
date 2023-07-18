// tree traversal
// DFS - postorder 
// in postorder the root node is the last one visited/recorded. 
const DFS = (node) => {
  const visited = [];
  let current = node; 
  
  const traverse = (currentNode) => {
    if (currentNode.left) traverse(currentNode.left)
    if (currentNode.right) traverse(currentNode.right)
    visited.push(currentNode.value)
    
  }
  traverse(current);
  return visited;
}