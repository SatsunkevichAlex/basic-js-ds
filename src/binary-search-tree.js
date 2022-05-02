const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return search(this.rootNode, data);

    function search(node, data) {
      if (node === null)
        return null;

      else if (data < node.data)
        return search(node.left, data);

      else if (data > node.data)
        return search(node.right, data);

      else
        return node;
    }
  }

  remove(data) {
    this.root = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data
  }

  max() {
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

function addWithin(root, value) {
  if (!root) {
    return new Node(value);
  }

  if (value < root.data) {
    root.left = addWithin(root.left, value);
  } else {
    root.right = addWithin(root.right, value);
  }

  return root;
}

module.exports = {
  BinarySearchTree
};
