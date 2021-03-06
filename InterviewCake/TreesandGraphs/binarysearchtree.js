// Binary Search Tree Class


// RECAP
// Trees are non-linear data structures that contain a root and child nodes
// Binary trees can have values of any type, but at most two children for each parent
// Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than its value and every node to the right is greater.
// We can search through trees using BFS and DFS.

// Big O of BST
// insertion - O(log n)
// searching - O(log n)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  has(value) {
    if (this.root === null) {
      return false;
    } else {
      const current = this.root;
      const found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      const current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
        if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } 
          current = current.right;
        }
      }
    }
  }

  breadthFirstSearch = () => {
    // create a queue (this can be an array) and a variable to store the values of the nodes visited. 
    const queue = [],
      visitedValues = [],
      node = this.root;
    // place the root node in the queue
    queue.push(this.root)
    // loop as long as there is anything in the queue
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visitedValues;
  };

  DFSPreOrder = () => {
    const data = [];
    const current = this.root;

    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }

  DFSPostOrder = () => {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder = () => {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(9);
tree.insert(5);
tree.insert(1);
tree.insert(2);

console.log(tree)

const leahNode = new Node(20);

