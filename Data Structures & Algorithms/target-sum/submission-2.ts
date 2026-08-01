class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {

        const n=nums.length;

        const memo=Array.from({length:n},()=>new Array(2000).fill(undefined));

        function solve(i:number,curr:number):number{

            if(curr===target && i==n){
                return 1;
            }

            if(i>=n){
                return 0;
            }

            if(memo[i][curr]!==undefined){
                return memo[i][curr];
            }

            const add=solve(i+1,curr+nums[i]);
            const sub=solve(i+1,curr-nums[i]);

            return memo[i][curr]=add+sub;
        }

        return solve(0,0);
    }
}
