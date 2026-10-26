class Solution {

    public int solve(int[] coins,int remAmount,int[] dp){
        if(remAmount==0){
            return 0;
        }
        if(remAmount<0){
            return Integer.MAX_VALUE;
        }

        if(dp[remAmount]!=-1) return dp[remAmount];

        int minCoins=Integer.MAX_VALUE;

        for(int coin:coins){
            if(coin<=remAmount && solve(coins,remAmount-coin,dp)!=Integer.MAX_VALUE){
                minCoins=Math.min(minCoins,1+solve(coins,remAmount-coin,dp));
            }
        }
        return dp[remAmount]=minCoins;
    }


    public int coinChange(int[] coins, int amount) {
        int[] dp=new int[amount+1];

        Arrays.fill(dp,-1);

        int res=solve(coins,amount,dp);

        return res==Integer.MAX_VALUE?-1:res;
    }
}
