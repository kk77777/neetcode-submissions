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

    private int count;

    private void findGoodNodesCount(TreeNode root, int currMax){
        if(root==null) return;
        if(root.val>=currMax){
            currMax=root.val;
            count++;
        }

        findGoodNodesCount(root.left,currMax);
        findGoodNodesCount(root.right,currMax);
    }

    public int goodNodes(TreeNode root) {
        count=0;

        findGoodNodesCount(root,root.val);

        return count;

    }
}
