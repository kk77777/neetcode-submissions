class Solution {

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>>adj=new ArrayList<>();
        int[] indegree=new int[numCourses];
        int count=0;

        for(int i=0;i<numCourses;i++){
            adj.add(new ArrayList<>());
        }

        for(int[] prerequisite:prerequisites){
            int preq=prerequisite[1];
            int course=prerequisite[0];

            adj.get(preq).add(course);
            indegree[course]++;
        }

        Queue<Integer>q=new PriorityQueue<>();

        for(int i=0;i<numCourses;i++){
            if(indegree[i]==0){
                q.add(i);
            }
        }

        while(!q.isEmpty()){
            int curr=q.poll();
            List<Integer>nodes=adj.get(curr);
            count++;
            for(int next:nodes){
                indegree[next]--;
                if(indegree[next]==0){
                    q.add(next);
                }
            }
        }

        return count==numCourses;
    }


}
