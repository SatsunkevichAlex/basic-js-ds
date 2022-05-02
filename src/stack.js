const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  parts = [];

  push(element) {
    let newArr = [];
    for (let i = 0; i < this.parts.length + 1; i++){
      newArr[i] = this.parts[i];
    }
    newArr[newArr.length - 1] = element;
    this.parts = newArr;
  }

  peek() {
    return this.parts[this.parts.length - 1];
  }

  pop() {
    let result = this.parts[this.parts.length - 1];
    let newArr = [];
    for (let i = 0; i < this.parts.length - 1; i++){
      newArr[i] = this.parts[i];
    }
    this.parts = newArr;
    return result
  }
}

module.exports = {
  Stack
};