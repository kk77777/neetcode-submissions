class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowSet: Set<string>[] = Array.from({ length: 9 }, () => new Set());
        const colSet: Set<string>[] = Array.from({ length: 9 }, () => new Set());
        const boxSet: Set<string>[] = Array.from({ length: 9 }, () => new Set());

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const val = board[row][col];
                if (val === ".") continue;
                const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                if (rowSet[row].has(val) || colSet[col].has(val) || boxSet[boxIndex].has(val))
                    return false;

                rowSet[row].add(val);
                colSet[col].add(val);
                boxSet[boxIndex].add(val);
            }
        }

        return true;
    }
}
