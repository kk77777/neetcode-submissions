class Solution {
    public String foreignDictionary(String[] words) {
        Map<Character, Set<Character>> adj = new HashMap<>();
        Map<Character, Integer> indegree = new HashMap<>();

        int n = words.length;

        for (String word : words) {
            for (char c : word.toCharArray()) {
                adj.putIfAbsent(c, new HashSet<>());
                indegree.putIfAbsent(c, 0);
            }
        }

        for (int i = 0; i < n - 1; i++) {
            String w1 = words[i];
            String w2 = words[i+1];

            boolean foundDifference=false;

            int minWordLength = Math.min(w1.length(), w2.length());

            for (int j = 0; j < minWordLength; j++) {
                char c1 = w1.charAt(j);
                char c2 = w2.charAt(j);

                if (c1 != c2) {
                    if (!adj.get(c1).contains(c2)) {
                        adj.get(c1).add(c2);
                        indegree.put(c2, indegree.get(c2) + 1);
                    }

                    foundDifference = true;
                    break;
                }
            }

            if (!foundDifference && (w1.length() > w2.length())) {
                return "";
            }
        }

        StringBuilder res = new StringBuilder();

        Queue<Character> q = new LinkedList<>();

        for (char c : indegree.keySet()) {
            if (indegree.get(c) == 0) {
                q.offer(c);
            }
        }

        while (!q.isEmpty()) {
            char curr = q.poll();
            res.append(curr);

            for (char next : adj.get(curr)) {
                indegree.put(next, indegree.get(next) - 1);

                if (indegree.get(next) == 0) {
                    q.offer(next);
                }
            }
        }

        if (res.length() != indegree.size()) {
            return "";
        }

        return res.toString();
    }
}
