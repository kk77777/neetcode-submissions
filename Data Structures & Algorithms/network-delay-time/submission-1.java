class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        Map<Integer, List<int[]>> adj = new HashMap<>();

        for (int[] time : times) {
            int u = time[0];
            int v = time[1];
            int w = time[2];
            adj.putIfAbsent(u, new ArrayList<>());
            adj.get(u).add(new int[] {v, w});
        }

        int[] res = new int[n];
        Arrays.fill(res, Integer.MAX_VALUE);

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[1], b[1]));
        pq.offer(new int[] {k, 0});
        res[k - 1] = 0;

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();

            int v = curr[0];
            int w = curr[1];

            if (res[v-1] < w) {
                continue;
            }

            for (int[] edge : adj.getOrDefault(v, new ArrayList<>())) {
                int next = edge[0];
                int weight = edge[1];

                int newDist = w + weight;

                if (newDist < res[next-1]) {
                    res[next-1] = newDist;
                    pq.offer(new int[] {next, newDist});
                }
            }
        }

        int ans = 0;

        for (int dist : res) {
            if (dist == Integer.MAX_VALUE) {
                return -1;
            }

            ans=Math.max(ans,dist);
        }

        return ans;
    }
}
