class Solution {
    static class P {
        int node;
        int dist;

        P(int node, int dist) {
            this.node = node;
            this.dist = dist;
        }
    }

    public int minCostConnectPoints(int[][] points) {
        int n = points.length;
        PriorityQueue<P> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.dist, b.dist));
        boolean[] vis=new boolean[n];

        pq.offer(new P(0,0));

        int count=0;
        int totalCost=0;

        while(count<n && !pq.isEmpty()){
            P curr=pq.poll();
            int node=curr.node;
            int dist=curr.dist;

            if(vis[node]){
                continue;
            }

            vis[node]=true;
            count++;
            totalCost+=dist;

            for(int next=0;next<n;next++){
                if(vis[next]){
                    continue;
                }

                int d=Math.abs(points[node][0]-points[next][0])+Math.abs(points[node][1]-points[next][1]);

                pq.add(new P(next,d));
            }
        }

        return totalCost;
    }
}
