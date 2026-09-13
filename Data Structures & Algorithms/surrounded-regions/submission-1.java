class Solution {
    private static final int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    private int m, n;

    private void dfs(char[][] board, boolean[][] vis, int x, int y) {
        if (x < 0 || x >= m || y < 0 || y >= n || vis[x][y] || board[x][y] == 'X') {
            return;
        }

        vis[x][y] = true;

        for (int[] d : dirs) {
            int nx = x + d[0];
            int ny = y + d[1];

            dfs(board, vis, nx, ny);
        }
    }

    public void solve(char[][] board) {
        m = board.length;
        n = board[0].length;

        boolean[][] vis = new boolean[m][n];

        for (int i = 0; i < m; i++) {
            if (board[i][0] == 'O') {
                dfs(board, vis, i, 0);
            }
            if (board[i][n - 1] == 'O') {
                dfs(board, vis, i, n - 1);
            }
        }

        for (int j = 0; j < n; j++) {
            if (board[0][j] == 'O') {
                dfs(board, vis, 0, j);
            }
            if (board[m - 1][j] == 'O') {
                dfs(board, vis, m - 1, j);
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 'O' && !vis[i][j]) {
                    board[i][j] = 'X';
                }
            }
        }
    }
}
