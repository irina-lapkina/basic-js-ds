const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

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
    this.rootNode = this._add(data, this.rootNode);
  }

  _add(data, node) {
    if (!node) {
      return { data };
    }
    if (data < node.data) {
      node.left = this._add(data, node.left);
    } else if (data > node.data) {
      node.right = this._add(data, node.right);
    }
    return node;
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this._find(data, this.rootNode);
  }

  _find(data, node) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      return node;
    }
    return data < node.data
      ? this._find(data, node.left)
      : this._find(data, node.right);
  }

  remove(data) {
    this.rootNode = this._removeNode(data, this.rootNode);
  }

  _removeNode(data, node) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this._removeNode(data, node.left);
    } else if (data > node.data) {
      node.right = this._removeNode(data, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      node.data = this._min(node.right).data;
      node.right = this._removeNode(node.data, node.right);
    }
    return node;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    return this._min(this.rootNode).data;
  }

  _min(node) {
    return node.left ? this._min(node.left) : node;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    return this._max(this.rootNode).data;
  }

  _max(node) {
    return node.right ? this._max(node.right) : node;
  }
}

module.exports = {
  BinarySearchTree,
};
