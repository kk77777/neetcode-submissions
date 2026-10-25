class Solution {
    private int solve(int[] coins, int amount, int index, int[][] dp) {
        if (amount == 0)
            return 0;
        if (amount < 0 || index >= coins.length)
            return Integer.MAX_VALUE;
        if (dp[index][amount] != -1)
            return dp[index][amount];

        int take = solve(coins, amount - coins[index], index, dp);
        if (take != Integer.MAX_VALUE)
            take += 1;
        int notTake = solve(coins, amount, index + 1, dp);

        return dp[index][amount] = Math.min(take, notTake);
    }

    public int coinChange(int[] coins, int amount) {
        int[][] dp = new int[coins.length][amount + 1];
        for (int[] row : dp) Arrays.fill(row, -1);
        int res = solve(coins, amount, 0, dp);
        return res == Integer.MAX_VALUE ? -1 : res;
    }
}