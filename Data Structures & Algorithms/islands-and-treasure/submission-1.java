class Solution {

    private static final int INF=2147483647;
    private static final int[][] dirs={{-1,0},{1,0},{0,1},{0,-1}};

    public void islandsAndTreasure(int[][] grid) {
        int m=grid.length;
        int n=grid[0].length;

        Queue<int[]>q=new LinkedList<>();

        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(grid[i][j]==0){
                    q.offer(new int[]{i,j});
                }
            }
        }

        while(!q.isEmpty()){
            int[] curr=q.poll();
            int x=curr[0];
            int y=curr[1];

            for(int[] d:dirs){
                int _x=x+d[0];
                int _y=y+d[1];

                if(_x>=0 && _x<m && _y>=0 && _y<n && grid[_x][_y]==INF){
                    grid[_x][_y]=grid[x][y]+1;
                    q.offer(new int[]{_x,_y});
                }
            }
        }

    }
}
