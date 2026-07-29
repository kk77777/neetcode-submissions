class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        const n = s.length;
        const dp: (boolean | undefined)[][] = Array.from({ length: n }, () =>
            Array(n).fill(undefined),
        );
        let count = 0;
        for (let l = 1; l <= n; l++) {
            for (let i = 0; i + l <= n; i++) {
                const j = l + i - 1;
                if (i === j) {
                    dp[i][j] = true;
                } else if (i + 1 == j) {
                    dp[i][j] = s[i] === s[j];
                } else {
                    dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
                }
                if (dp[i][j]) {
                    count++;
                }
            }
        }

        return count;
    }
}
