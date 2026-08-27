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
    private TreeNode buildBT(
        int[] preorder, Map<Integer, Integer> inMap, int[] pIndex, int start, int end) {
        if (start > end)
            return null;

        int rootVal = preorder[pIndex[0]++];
        TreeNode root = new TreeNode(rootVal);

        int index = inMap.get(rootVal);

        root.left = buildBT(preorder, inMap, pIndex, start, index - 1);
        root.right = buildBT(preorder, inMap, pIndex, index + 1, end);

        return root;
    }

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        Map<Integer, Integer> inMap = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) {
            inMap.put(inorder[i], i);
        }

        int[] pIndex = {0};
        return buildBT(preorder, inMap, pIndex, 0, inorder.length - 1);
    }
}
