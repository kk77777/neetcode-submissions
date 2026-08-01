class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s: string, p: string): boolean {
        const m = s.length;
        const n = p.length;

        const memo = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(undefined));

        function solve(i: number, j: number) {
            if (j == n) {
                return i == m;
            }

            if (memo[i][j] !== undefined) {
                return memo[i][j];
            }

            const match = i < m && (s[i] === p[j] || p[j] == ".");

            if (j + 1 < n && p[j + 1] === "*") {
                const skip = solve(i, j + 2);
                const use = match && solve(i + 1, j);

                return (memo[i][j] = skip || use);
            }

            if (match) {
                return (memo[i][j] = solve(i + 1, j + 1));
            }

            return (memo[i][j] = false);
        }

        return solve(0, 0);
    }
}
