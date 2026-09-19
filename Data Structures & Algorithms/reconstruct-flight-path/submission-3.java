class Solution {
    Map<String, PriorityQueue<String>> adj = new HashMap<>();
    LinkedList<String> res = new LinkedList<>();

    private void dfs(String airport) {
        PriorityQueue<String> neighbours = adj.get(airport);

        while (neighbours != null && !neighbours.isEmpty()) {
            String next = neighbours.poll();
            dfs(next);
        }

        res.addFirst(airport);
    }

    public List<String> findItinerary(List<List<String>> tickets) {
        for (List<String> ticket : tickets) {
            String from = ticket.get(0);
            String to = ticket.get(1);

            adj.putIfAbsent(from, new PriorityQueue<>());
            adj.get(from).offer(to);
        }

        dfs("JFK");

        return res;
    }
}