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

    private int calculateDepth(TreeNode root, int depth){

        if(root==null) return depth;

        int leftDepth=calculateDepth(root.left,depth+1);
        int rightDepth=calculateDepth(root.right,depth+1);

        return Math.max(leftDepth,rightDepth);

    }

    public int maxDepth(TreeNode root) {
        return calculateDepth(root,0);
    }
}
