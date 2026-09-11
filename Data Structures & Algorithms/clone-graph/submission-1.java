/*
Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {

    private Node dfs(Node curr, Map<Node,Node>mp){
        if(mp.containsKey(curr)){
            return mp.get(curr);
        }
        Node copy=new Node(curr.val);
        mp.put(curr,copy);
        for(Node neighbors:curr.neighbors){
            copy.neighbors.add(dfs(neighbors,mp));
        }

        return copy;
    }

    public Node cloneGraph(Node node) {
        if(node==null) return null;
        Map<Node,Node>mp=new HashMap<Node,Node>();
        return dfs(node,mp);
    }
}