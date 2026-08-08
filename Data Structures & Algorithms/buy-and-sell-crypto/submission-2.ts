class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const n=prices.length;
        let maxP=0;
        let minBuy=prices[0];
        for(let i=1;i<n;i++){
                let currProfit=prices[i]-minBuy;
                minBuy=Math.min(minBuy,prices[i]);
                maxP=Math.max(currProfit,maxP);
        }
        return maxP;
    }
}
