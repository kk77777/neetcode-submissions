class Solution {

    private boolean dfs(List<List<Integer>>adj,boolean[] vis, Set<Integer>visiting,int course){
        if(visiting.contains(course)){
            return false;
        }

        if(vis[course]){
            return true;
        }

        visiting.add(course);

        for(int next:adj.get(course)){
            if(!dfs(adj,vis,visiting,next)){
                return false;
            }
        }

        visiting.remove(course);
        vis[course]=true;

        return true;
    }


    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>>adj=new ArrayList<>();

        for(int i=0;i<numCourses;i++){
            adj.add(new ArrayList<>());
        }

        for(int[] prerequisite:prerequisites){
            int preq=prerequisite[1];
            int course=prerequisite[0];

            adj.get(preq).add(course);
        }

        boolean[] vis=new boolean[numCourses];
        Set<Integer>visiting=new HashSet<>();

        for(int i=0;i<numCourses;i++){
            if(!dfs(adj,vis,visiting,i)){
                return false;
            }
        }


        return true;
    }


}
