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

    private int maxDiameter=0;

    private int calculateDiameter(TreeNode root){
        if(root==null) return 0;
        int leftDiameter=calculateDiameter(root.left);
        int rightDiameter=calculateDiameter(root.right);

        maxDiameter=Math.max(maxDiameter,leftDiameter+rightDiameter);
        return Math.max(leftDiameter,rightDiameter)+1;
    }

    public int diameterOfBinaryTree(TreeNode root) {
        calculateDiameter(root);
        return maxDiameter;
    }
}
