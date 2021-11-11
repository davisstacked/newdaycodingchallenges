// Binary Search Tree Class

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

