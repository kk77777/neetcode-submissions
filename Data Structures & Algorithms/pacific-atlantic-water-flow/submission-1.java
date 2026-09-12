class Solution {
    private int m, n;
    private List<List<Integer>> res = new ArrayList<>();
    private static final int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    private void dfs(int[][] heights, boolean[][] vis, int prevHeight, int x, int y) {
        if (x < 0 || x >= m || y < 0 || y >= n || vis[x][y] || heights[x][y] < prevHeight) {
            return;
        }

        vis[x][y] = true;

        for (int[] d : dirs) {
            int nx = x + d[0];
            int ny = y + d[1];
            dfs(heights, vis, heights[x][y], nx, ny);
        }
    }

    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        m = heights.length;
        n = heights[0].length;

        boolean[][] visPacific = new boolean[m][n];
        boolean[][] visAtlantic = new boolean[m][n];

        for (int i = 0; i < m; i++) {
            dfs(heights, visPacific, Integer.MIN_VALUE, i, 0);
        }

        for (int j = 0; j < n; j++) {
            dfs(heights, visPacific, Integer.MIN_VALUE, 0, j);
        }

        for (int i = 0; i < m; i++) {
            dfs(heights, visAtlantic, Integer.MIN_VALUE, i, n - 1);
        }

        for (int j = 0; j < n; j++) {
            dfs(heights, visAtlantic, Integer.MIN_VALUE, m - 1, j);
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (visPacific[i][j] && visAtlantic[i][j]) {
                    res.add(List.of(i, j));
                }
            }
        }

        return res;
    }
}
