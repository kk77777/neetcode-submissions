interface Coordinate {
    class Point implements Coordinate {
        public int x;
        public int y;
        public int dist;

        public Point(int x, int y, int dist) {
            this.x = x;
            this.y = y;
            this.dist = dist;
        }
    }
}
class Solution {
    public record Point(int x, int y, int dist) {}

    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<Point> maxHeap =
            new PriorityQueue<>((c1, c2) -> Integer.compare(c2.dist, c1.dist));

        for (int[] point : points) {
            int x = point[0];
            int y = point[1];
            int dist = (x * x) + (y * y);

            maxHeap.add(new Point(x, y, dist));

            if (maxHeap.size() > k) {
                maxHeap.poll();
            }
        }

        int[][] result = new int[k][2];
        for (int i = 0; i < k; i++) {
            Point p = maxHeap.poll();
            result[i][0] = p.x;
            result[i][1] = p.y;
        }

        return result;
    }
}
