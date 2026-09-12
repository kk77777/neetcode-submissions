class Solution {
    private static final int[][] dirs = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};

    public int orangesRotting(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        int minTime = 0;

        Queue<int[]> q = new LinkedList<>();

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 2) {
                    q.offer(new int[] {i, j});
                }
            }
        }

        while (!q.isEmpty()) {
            int size = q.size();
            boolean rotted = false;

            for (int i = 0; i < size; i++) {
                int[] curr = q.poll();
                int x = curr[0];
                int y = curr[1];

                for (int[] d : dirs) {
                    int _x = x + d[0];
                    int _y = y + d[1];

                    if (_x >= 0 && _x < m && _y >= 0 && _y < n && grid[_x][_y] == 1) {
                        grid[_x][_y] = 2;
                        q.offer(new int[] {_x, _y});
                        rotted = true;
                    }
                }
            }

            if (rotted) {
                minTime++;
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    return -1;
                }
            }
        }

        return minTime == -1 ? 0 : minTime;
    }
}
