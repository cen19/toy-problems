/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root) {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  } else {
    return 0;
  }
};

const Tree = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: 5
    }
  }
};

console.log(maxDepth(Tree));