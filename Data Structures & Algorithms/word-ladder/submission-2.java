class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> words = new HashSet<>(wordList);

        if (!words.contains(endWord)) {
            return 0;
        }

        Queue<String> q = new LinkedList<>();
        q.offer(beginWord);

        Set<String> vis = new HashSet<>();
        vis.add(beginWord);

        int level = 1;

        while (!q.isEmpty()) {
            int size = q.size();

            for (int i = 0; i < size; i++) {
                String word = q.poll();

                if (word.equals(endWord)) {
                    return level;
                }

                char[] chars = word.toCharArray();

                for (int j = 0; j < chars.length; j++) {
                    char original = chars[j];

                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) {
                            continue;
                        }

                        chars[j] = c;

                        String nextWord = new String(chars);

                        if (words.contains(nextWord) && !vis.contains(nextWord)) {
                            vis.add(nextWord);
                            q.offer(nextWord);
                        }
                    }

                    chars[j] = original;
                }
            }

            level++;
        }

        return 0;
    }
}
