// Implement a queue ↴ with 2 stacks. ↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).

// Optimize for the time cost of mm calls on your queue. These can be any mix of enqueue and dequeue calls.

// Assume you already have a stack implementation and it gives O(1) time push and pop.

class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

// Solution
// Let's call our stacks inStack and outStack.

// For enqueue, we simply push the enqueued item onto inStack.

// For dequeue on an empty outStack, the oldest item is at the bottom of inStack. So we dig to the bottom of inStack by pushing each item one-by-one onto outStack until we reach the bottom item, which we return.

// After moving everything from inStack to outStack, the item that was enqueued the 2nd longest ago (after the item we just returned) is at the top of outStack, the item enqueued 3rd longest ago is just below it, etc. So to dequeue on a non-empty outStack, we simply return the top item from outStack.


// With that description in mind, let's write some code!

class QueueTwoStacks {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue = (item) => {
    this.inStack.push(item);
  }

  dequeue = () => {
    if (this.outStack.length === 0) {

      // Move items from inStack to outStack, reversing order
      while (this.inStack.length > 0) {
        const newestInStackItem = this.inStack.pop(); 
        this.outStack.push(newestInStackItem);
      }

      // if outStack is still empty, raise an error
      if (this.outStack.length === 0) {
        throw new Eroor("Can't dequeue from empty queue!")
      }
    }
    return this.outStack.pop();
  }
}

