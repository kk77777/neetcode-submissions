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

    int ans=Integer.MIN_VALUE;

    private int solve(TreeNode root){
        if(root==null) return 0;

        int left=solve(root.left);
        int right=solve(root.right);
        // System.out.println(left+" , "+right);

        int poora=root.val+left+right;
        int ekSideLenge=root.val+Math.max(left,right);
        int sirfRoot=root.val;

        ans=Math.max(ans,Math.max(sirfRoot,Math.max(poora,ekSideLenge)));
        // System.out.println("Ans = "+ans);

        return Math.max(sirfRoot,ekSideLenge);

    }

    public int maxPathSum(TreeNode root) {
        solve(root);
        return ans;
    }
}
