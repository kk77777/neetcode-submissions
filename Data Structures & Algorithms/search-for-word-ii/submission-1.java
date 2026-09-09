class Solution {
    private static final int[][] dir = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};

    private static class TrieNode {
        TrieNode[] children = new TrieNode[26];
        boolean isEndOfWord;
        String word;
    }

    private void addWord(TrieNode root, String word) {
        TrieNode current = root;

        for (char ch : word.toCharArray()) {
            int index = ch - 'a';

            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }

            current = current.children[index];
        }

        current.isEndOfWord = true;
        current.word = word;
    }

    private void dfs(char[][] board, int x, int y, TrieNode node, List<String> res) {
        int m = board.length;
        int n = board[0].length;

        if (x < 0 || x >= m || y < 0 || y >= n) {
            return;
        }

        char ch = board[x][y];

        if (ch == '#') {
            return;
        }

        int index = ch - 'a';

        if (node.children[index] == null) {
            return;
        }

        node = node.children[index];

        if (node.isEndOfWord) {
            res.add(node.word);
            node.isEndOfWord = false;
        }

        board[x][y] = '#';

        for (int[] d : dir) {
            dfs(board, x + d[0], y + d[1], node, res);
        }

        board[x][y] = ch;
    }

    public List<String> findWords(char[][] board, String[] words) {
        List<String> res = new ArrayList<>();

        TrieNode root = new TrieNode();

        for (String word : words) {
            addWord(root, word);
        }

        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                dfs(board, i, j, root, res);
            }
        }

        return res;
    }
}