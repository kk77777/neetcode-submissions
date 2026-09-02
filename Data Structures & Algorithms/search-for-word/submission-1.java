class Solution {
    int m;
    int n;
    int wLen;

    boolean solve(char[][] board, int i, int j, String word, int index) {
        // Base case
        if (index == wLen)
            return true;
        if (i >= m || i < 0 || j >= n || j < 0 || board[i][j] != word.charAt(index))
            return false;

        char temp = board[i][j];
        board[i][j] = '#';
        boolean res = solve(board, i - 1, j, word, index + 1)
            || solve(board, i + 1, j, word, index + 1) || solve(board, i, j + 1, word, index + 1)
            || solve(board, i, j - 1, word, index + 1);
        board[i][j] = temp;
        return res;
    }

    public boolean exist(char[][] board, String word) {
        m = board.length;
        n = board[0].length;
        wLen = word.length();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    if (solve(board, i, j, word, 0)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
