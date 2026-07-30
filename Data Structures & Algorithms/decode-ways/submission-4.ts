class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    numDecodings(s: string): number {
        const n = s.length;
        const dp = new Array(101).fill(-1);
        dp[n] = 1;
        for (let i = n - 1; i >= 0; i--) {
            if (s[i] === "0") dp[i] = 0;
            else {
                dp[i] = dp[i + 1];
                if (i < n - 1 && (s[i] == "1" || (s[i] == "2" && s[i + 1] <= "6"))) {
                    dp[i] += dp[i + 2];
                }
            }
        }

        return dp[0];
    }
}
