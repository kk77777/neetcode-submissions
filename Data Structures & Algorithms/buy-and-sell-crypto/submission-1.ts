class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const n=prices.length;
        let maxP=0;
        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                let currProfit=prices[j]-prices[i];
                maxP=Math.max(currProfit,maxP);
            }
        }

        return maxP;
    }
}
