class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s: string, t: string): number {
        const l1 = s.length,
            l2 = t.length;

        if (l1 < l2) return 0;

        const memo = Array.from({ length: l1 + 1 }, () => new Array(l2 + 1).fill(-1));

        function solve(i: number, j: number) {
            if (j >= l2) return 1;
            if (i >= l1) return 0;

            if (memo[i][j] !== -1) return memo[i][j];

            let match = 0;
            let notMatch = 0;
            if (s[i] === t[j]) {
                match = solve(i + 1, j + 1);
            }

            notMatch = solve(i + 1, j);

            return (memo[i][j] = match + notMatch);
        }

        return solve(0, 0);
    }
}
