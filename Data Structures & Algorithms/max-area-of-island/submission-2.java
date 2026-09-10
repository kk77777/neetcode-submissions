class Solution {
    private int res = 0;

    private static final int[][] dir = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};

    private boolean isSafe(int x, int y, boolean[][] vis, int[][] grid, int m, int n) {
        if (x < 0 || x >= m || y < 0 || y >= n || vis[x][y] || grid[x][y] == 0) {
            return false;
        }

        return true;
    }

    private int dfs(int x, int y, boolean[][] vis, int[][] grid, int m, int n, int curr) {
        if (!isSafe(x, y, vis, grid, m, n)) {
            return 0;
        }

        int area = 1;

        vis[x][y] = true;

        for (int[] d : dir) {
            int _x = x + d[0];
            int _y = y + d[1];
            area += dfs(_x, _y, vis, grid, m, n, curr + 1);
        }

        return area;
    }

    public int maxAreaOfIsland(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        boolean[][] vis = new boolean[m][n];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (!vis[i][j] && grid[i][j] == 1) {
                    res = Math.max(res, dfs(i, j, vis, grid, m, n, 0));
                }
            }
        }

        return res;
    }
}
