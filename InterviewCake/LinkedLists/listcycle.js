// You have a singly-linked list ↴ and want to check if it contains a cycle.

// A singly-linked list is built with nodes, where each node has:

// node.next—the next node in the list.
// node.value—the data held in the node. For example, if our linked list stores people in line at the movies, node.value might be the person's name.
// For example:

  class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// JavaScript
// A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

// Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.


// Solution
// We keep two pointers to nodes (we'll call these “runners”), both starting at the first node. Every time slowRunner moves one node ahead, fastRunner moves two nodes ahead.

// If the linked list has a cycle, fastRunner will "lap" (catch up with) slowRunner, and they will momentarily equal each other.

// If the list does not have a cycle, fastRunner will reach the end.

function containsCycle(firstNode) {

  // Start both runners at the beginning
  let slowRunner = firstNode;
  let fastRunner = firstNode;

  // Until we hit the end of the list
  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    // Case: fastRunner is about to "lap" slowRunner
    if (fastRunner === slowRunner) {
      return true;
    }
  }
  // Case: fastRunner reaches the end of the list
  return false;
}