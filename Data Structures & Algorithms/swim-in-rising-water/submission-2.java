class Solution {
    static final int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    static class Node {
        int time;
        int x;
        int y;

        Node(int time, int x, int y) {
            this.time = time;
            this.x = x;
            this.y = y;
        }
    }

    public int swimInWater(int[][] grid) {
        int n=grid.length;
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.time, b.time));
        int[][] res = new int[n][n];

        for (int i = 0; i < n; i++) {
            Arrays.fill(res[i], Integer.MAX_VALUE);
        }

        res[0][0] = grid[0][0];

        pq.add(new Node(grid[0][0], 0, 0));

        while (!pq.isEmpty()) {
            Node curr = pq.poll();
            int currTime = curr.time;
            int x = curr.x;
            int y = curr.y;

            if (x == n - 1 && y == n - 1) {
                return currTime;
            }

            if (currTime > res[x][y]) {
                continue;
            }

            for (int[] d : dirs) {
                int nx = x + d[0];
                int ny = y + d[1];

                if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                    int nextTime = Math.max(currTime, grid[nx][ny]);

                    if (nextTime < res[nx][ny]) {
                        res[nx][ny] = nextTime;
                        pq.add(new Node(nextTime, nx, ny));
                    }
                }
            }
        }
        return res[n - 1][n - 1];
    }
}
