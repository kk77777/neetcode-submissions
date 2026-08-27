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

    private TreeNode buildBT(int[] preorder, int[] inorder,int[] pIndex,int start,int end){
        if(start>end) return null;
        TreeNode root=new TreeNode(preorder[pIndex[0]++]);
        int index=0;
        for(int i=start;i<=end;i++){
            if(root.val==inorder[i]){
                index=i;
            }
        }
        root.left=buildBT(preorder,inorder,pIndex,start,index-1);
        root.right=buildBT(preorder,inorder,pIndex,index+1,end);
        return root;
    }

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        int[] tree={0};
        return buildBT(preorder,inorder,tree,0,preorder.length-1);
    }
}
