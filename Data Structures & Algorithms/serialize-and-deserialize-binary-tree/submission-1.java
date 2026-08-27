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

public class Codec {

    private int index=0;

    private void serializeHelper(TreeNode node, StringBuilder sb){
        if(node==null){
            sb.append("null,");
            return;
        }

        sb.append(node.val).append(",");

        serializeHelper(node.left,sb);
        serializeHelper(node.right,sb);
    }

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb=new StringBuilder();
        serializeHelper(root,sb);
        return sb.toString();
    }

    private TreeNode deserializeHelper(String[] values){
        String value=values[index++];
        if(value.equals("null")){
            return null;
        }

        TreeNode node=new TreeNode(Integer.parseInt(value));
        node.left=deserializeHelper(values);
        node.right=deserializeHelper(values);

        return node;
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        String[] values=data.split(",");
        index=0;
        return deserializeHelper(values);
    }
}
