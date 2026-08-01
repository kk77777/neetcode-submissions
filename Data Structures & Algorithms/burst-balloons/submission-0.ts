class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums: number[]): number {

        const paddedNums=[1,...nums,1];
        const n=nums.length;

        const memo=Array.from({length:n+2},()=>new Array(n+2).fill(-1));

        function solve(left:number,right:number):number{
            
            if(left>right){
                return 0;
            }

            if(memo[left][right]!==-1) return memo[left][right];

            let maxCoins=0;

            for(let k=left;k<=right;k++){
                const coinsFromK=paddedNums[left-1]*paddedNums[k]*paddedNums[right+1];
                const total=coinsFromK+solve(left,k-1)+solve(k+1,right);
                maxCoins=Math.max(maxCoins,total);
            }

            return memo[left][right]=maxCoins;
        }

        return solve(1,n);
    }
}
