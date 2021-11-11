// Binary Search Tree Class

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
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
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

// inserting a node
// steps iteratively and recursively

// Create a new node
// Starting at the root
//  Check if there is a root, if not - the root now becomes the new node!
// If there is a root, check if the value of the new node is greater than or less than the value of the root
// If it is greater
  // Check to see if there is a node to the right.
  // if there is, move to that node and repeat these steps
  // If there is not, add that node as the right property
  
  // if it is less
    // Check to see if there is a node to the left.
    // if there is, move to that node and repeat these steps
    // if there is not, add that node as the left property
    // return entire tree

    // Create a new node
const leahNode = new Node(20);

