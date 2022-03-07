// You have a linked list ↴ and want to find the kkth to last node.

// Write a function kthToLastNode() that takes an integer k and the headNode of a singly-linked list, and returns the kth to last node in the list.

// For example:

  class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// O(n) time and O(1) space complexity. (approach might still be slightly faster than 2nd approach listed, due to some caching and other optimizations that modern processors and memory have.): 

function kthToLastNode(k, head) {
  if (k < 1) {
    throw new Error(`Impossible to find less than first to last node: ${k}`);
  }
  let leftNode = head;
  let rightNode = head;

  // Move rightNode to the kth node
  for (let i = 0; i < k - 1; i++) {
    // But along the way, if a rightNode doesn't have a next,
    // then k is greater than the length of the list and there
    // can't be a kth-to-last node! we'll raise an error
    if (!rightNode.next) {
      throw new Error(`k is larger than the length of the linked list: ${k}`);
    }

    rightNode = rightNode.next;
  }

  // Starting with leftNode on the head,
  // move leftNode and rightNode down the list,
  // maintaining a distance of k between them,
  // until rightNode hits the end of the list
  while (rightNode.next) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }

  // Since leftNode is k nodes behind rightNode,
  // leftNode is now the kth to the last node!
  return leftNode;
}


// O(n) time and O(1) space complexity solution: 
function kthToLastNode(k, head) {
  // STEP 1: get the length of the list
  // Start at 1, not 0
  // else we'd fail to count the head node!
  let listLength = 1;
  let currentNode = head;

  // Traverse the whole list,
  // counting all the nodes
  while (currentNode.next) {
    currentNode = currentNode.next;
    listLength += 1;
  }

  // STEP 2: walk to the target node
  // Calculate how far to go, from the head,
  // to get to the kth to last node
  const howFarToGo = listLength - k;

  currentNode = head;
  for (let i = 0; i < howFarToGo; i++) {
    currentNode = currentNode.next;
  }

  return currentNode;
}


// kthToLastNode(2, a);
// Returns the node with value "Devil's Food" (the 2nd to last node)