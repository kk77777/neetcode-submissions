class Solution {

    private int find(int[] parent, int node){
        if(parent[node]==node){
            return node;
        }

        return parent[node]=find(parent,parent[node]);
    }

    public int countComponents(int n, int[][] edges) {

        int[] parent=new int[n];
        int[] size=new int[n];

        for(int i=0;i<n;i++){
            parent[i]=i;
        }

        int components=n;

        for(int[] edge:edges){
            int u=edge[0];
            int v=edge[1];

            int rootU=find(parent,u);
            int rootV=find(parent,v);

            if(rootU==rootV){
                continue;
            }

            if(size[rootU]<size[rootV]){
                int temp=rootU;
                rootU=rootV;
                rootV=temp;
            }

            parent[rootV]=rootU;
            size[rootU]+=size[rootV];

            components--;
        }

        return components;
    }
    
}
