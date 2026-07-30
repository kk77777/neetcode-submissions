class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {

        const dp=new Array(amount+1).fill(-1);

        function solve(remAmount:number):number{
            if(remAmount===0) return 0;
            if(remAmount<0) return Infinity;

            if(dp[remAmount]!==-1) return dp[remAmount];

            let minCoins=Infinity;

            for(const coin of coins){
                const res=solve(remAmount-coin);

                if(res!==Infinity){
                    minCoins=Math.min(minCoins,1+res);
                }
            }

            return dp[remAmount]=minCoins;
        }

        const ans=solve(amount)
        return ans===Infinity?-1:ans;
    }
}
