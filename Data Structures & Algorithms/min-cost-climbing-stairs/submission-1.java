class Solution {

    int solve(int[] cost,int currFloor, int[] dp){

        if(currFloor>=cost.length){
            return 0;
        }

        if(dp[currFloor]!=-1){
            return dp[currFloor];
        }

        int takeFirst=solve(cost,currFloor+1,dp);
        int takeSecond=solve(cost,currFloor+2,dp);
        
        return dp[currFloor]=cost[currFloor]+Math.min(takeFirst,takeSecond);

    }

    public int minCostClimbingStairs(int[] cost) {
        
        int[] dp=new int[cost.length+1];
        Arrays.fill(dp,-1);

        int startZero=solve(cost,0,dp);
        int startFirst=solve(cost,1,dp);

        return Math.min(startZero,startFirst);
    }
}
