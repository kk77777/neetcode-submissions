class Solution {
    private int res = 0;

    private static final int[][] dir = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};

    private boolean isSafe(int x, int y, boolean[][] vis, char[][] grid, int m, int n) {
        if (x < 0 || x >= m || y < 0 || y >= n || vis[x][y] || grid[x][y] == '0') {
            return false;
        }

        return true;
    }

    private void dfs(int x, int y, boolean[][] vis, char[][] grid, int m, int n) {
        if (!isSafe(x, y, vis, grid, m, n)) {
            return;
        }

        vis[x][y] = true;

        for (int[] d : dir) {
            int _x = x + d[0];
            int _y = y + d[1];
            dfs(_x, _y, vis, grid, m, n);
        }
    }

    public int numIslands(char[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        boolean[][] vis = new boolean[m][n];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (!vis[i][j] && grid[i][j] != '0') {
                    res++;
                    dfs(i,j,vis,grid,m,n);
                }
            }
        }

        return res;
    }
}
