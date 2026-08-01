class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix: number[][]): number {
        const m = matrix.length;
        const n = matrix[0].length;
        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const memo = Array.from({ length: m }, () => new Array(n).fill(-1));

        function solve(x: number, y: number): number {
            if (memo[x][y] !== -1) return memo[x][y];

            let maxPath = 1;
            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && nx < m && ny >= 0 && ny < n && matrix[nx][ny] > matrix[x][y]) {
                    maxPath = Math.max(maxPath, 1 + solve(nx, ny));
                }
            }

            return (memo[x][y] = maxPath);
        }

        let totalMax = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                totalMax = Math.max(totalMax, solve(i, j));
            }
        }

        return totalMax;
    }
}
