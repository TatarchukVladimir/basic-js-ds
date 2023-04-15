const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const addElem = (data, current) => {
      if (current === null) return current = new Node(data);

      if (current.data === data) return current;

      if (data > current.data) {
        current.right = addElem(data, current.right);
      } else if (data < current.data) {
        current.left = addElem(data, current.left);
      }

      return current;
    }
    
    return this.tree = addElem(data, this.tree);
  }

  has(data) {
    return this.find(data) !== null
  }

  find(data) {
    const findData = (data, current) => {
      if (current) {
        if (data < current.data) return findData(data, current.left)
        if (data > current.data) return findData(data, current.right)
        if (data === current.data) return current
      }
      return null
    }
    return findData(data, this.tree)
  }

  remove(data, current = this.tree) {
    if (!current) return null

    if (data > current.data) {
      current.right = this.remove(data, current.right)
    } else if (data < current.data) {
      current.left = this.remove(data, current.left)
    } else {
      if (!current.right && !current.left) {
        return current = null
      } else if (!current.right) {
        return current.left
      } else if (!current.left) {
        return current.right
      } else {
        current.data = this.min(current.right);
        current.right = this.remove(current.data, current.right);  
      }
    }
    return current
  }

  min(minValue = this.tree) {
    if (!this.tree) return null

    while (minValue.left) {
      minValue = minValue.left;
    }

    return minValue.data
  }

  max(maxValue = this.tree) {
    if (!this.tree) return null

    while (maxValue.right) {
      maxValue = maxValue.right;
    }

    return maxValue.data
  }
}

module.exports = {
  BinarySearchTree
};