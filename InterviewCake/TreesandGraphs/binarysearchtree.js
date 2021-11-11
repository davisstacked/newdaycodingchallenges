// Binary Search Tree Class

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  contains(value) {
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

const leahNode = new Node(20);

