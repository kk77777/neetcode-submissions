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

    private int height(TreeNode root){
        if(root==null) return 0;
        int lh=height(root.left);
        int rh=height(root.right);
        if(lh==-1 || rh==-1 || Math.abs(rh-lh)>1){
            return -1;
        }

        return 1+Math.max(lh,rh);
    }

    public boolean isBalanced(TreeNode root) {
        return height(root)!=-1;
    }
}
