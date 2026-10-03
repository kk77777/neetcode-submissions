class Solution {

    private int[] dp=new int[46];
    

    private int solve(int n){
        //base case
        if(n<0){
            return 0;
        }

        if(n==0){
            return 1;
        }

        if(dp[n]!= -1){
            return dp[n];
        }


        int take_1=solve(n-1);
        int take_2=solve(n-2);

        return dp[n]=take_1+take_2;
    }

    public int climbStairs(int n) {
        Arrays.fill(dp,-1);
        return solve(n);
    }
}
