const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head;
  tail;

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let toQueue = new ListNode(value);
    let tempNode = this.tail;
    this.tail = toQueue;
    if (typeof this.head === 'undefined') {
      this.head = this.tail;
      return
    }
    tempNode.next = this.tail;
  }

  dequeue() {
    let result = this.head.value;
    this.head = this.head.next;
    return result;
  }
}

module.exports = {
  Queue
};