/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    private int height(TreeNode root) {
        if (root == null)
            return 0;
        int leftHeight = height(root.left);
        int rightHeight = height(root.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    public boolean isBalanced(TreeNode root) {
        if (root == null)
            return true;
        int currLeft = height(root.left);
        int currRight = height(root.right);
        if (Math.abs(currLeft - currRight) > 1)
            return false;
        return (isBalanced(root.left) && isBalanced(root.right));
    }
}
