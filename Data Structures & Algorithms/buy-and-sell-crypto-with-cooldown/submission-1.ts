class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {

        const n=prices.length;

        const memo=Array.from({length:n},()=>new Array(2).fill(-1));

        function solve(i:number,canBuy:boolean){

            if(i>=n) return 0;

            const buyState=canBuy?1:0;

            if(memo[i][buyState]!==-1) return memo[i][buyState];

            if(canBuy){
                const wait=solve(i+1,true);
                const buy=-prices[i]+solve(i+1,false);
                return memo[i][buyState]=Math.max(wait,buy);
            }

            else{
                const wait=solve(i+1,false);
                const sell=prices[i]+solve(i+2,true);
                return memo[i][buyState]=Math.max(wait,sell);
            }
        }

        return solve(0,true);
    }
}
