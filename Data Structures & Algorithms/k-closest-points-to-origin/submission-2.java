class Solution {
    record Coordinate(int x, int y, int dist) {}

    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<Coordinate> pq =
            new PriorityQueue<>((a, b) -> Integer.compare(b.dist(), a.dist()));

        for (int[] point : points) {
            int x = point[0];
            int y = point[1];
            int dist = (x * x) + (y * y);

            Coordinate c = new Coordinate(x, y, dist);
            pq.add(c);

            if (pq.size() > k) {
                pq.poll();
            }
        }

        int[][] res = new int[k][2];

        for(int i=0;i<k;i++){
            Coordinate c=pq.poll();
            res[i][0]=c.x;
            res[i][1]=c.y;
        }

        return res;
    }
}
