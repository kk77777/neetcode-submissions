class Solution {

    private boolean isCyclic(List<List<Integer>>adj,boolean[] vis,int u, int parent){
        vis[u]=true;
        for(int v:adj.get(u)){
            if(!vis[v]){
                if(isCyclic(adj,vis,v,u)){
                    return true;
                }
            }
            else if(parent!=v){
                return true;
            }
        }

        return false;
    }


    public boolean validTree(int n, int[][] edges) {

        if(edges.length!=(n-1)) return false;

        List<List<Integer>>adj=new ArrayList<>();

        for(int i=0;i<n;i++){
            adj.add(new ArrayList<>());
        }
        
        for(int[] edge:edges){
            int u=edge[0];
            int v=edge[1];

            adj.get(u).add(v);
            adj.get(v).add(u);
        }

        boolean[] vis=new boolean[n];

        for(int i=0;i<n;i++){
            if(!vis[i]){
                if(isCyclic(adj,vis,i,-1)){
                    return false;
                }
            }
        }

        return true;

    }
}
