class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {

        const n=coins.length;

        const memo=Array.from({length:n},()=>new Array(amount).fill(undefined));

        function solve(i:number,remAmount:number):number{

            if(remAmount===0) return 1;
            if(i>=n || remAmount<0) return 0;

            if(memo[i][remAmount]!==undefined) return memo[i][remAmount]

            const take=solve(i,remAmount-coins[i]);
            const notTake=solve(i+1,remAmount);
            return memo[i][remAmount]=take+notTake;
        }

        return solve(0,amount);
    }
}
