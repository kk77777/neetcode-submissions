class Solution {
    private int solve(int[] nums, int index, int[] dp, int end) {
        if (index > end) {
            return 0;
        }

        if (dp[index] != -1) {
            return dp[index];
        }

        int take = nums[index] + solve(nums, index + 2, dp, end);
        int notTake = solve(nums, index + 1, dp, end);

        return dp[index] = Math.max(take, notTake);
    }

    public int rob(int[] nums) {
        int n = nums.length;

        if(n==1) return nums[0];

        int[] dp1 = new int[n + 1];
        int[] dp2 = new int[n + 1];

        Arrays.fill(dp1, -1);
        Arrays.fill(dp2, -1);

        // case 1 take the first element and not last
        int case1 = solve(nums, 0, dp1, n - 2);

        // case2 skip first take last
        int case2 = solve(nums, 1, dp2, n - 1);

        return Math.max(case1, case2);
    }
}
