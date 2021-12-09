// DFS Steps recursively

const DFSPreOrder = (rootNode) => {

  const values = [];
  const current = rootNode;

  const traverse = (node) => {
    values.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  return values;
  };

