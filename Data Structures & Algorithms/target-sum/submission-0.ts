class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {

        const n=nums.length;

        function solve(i,curr){

            if(curr===target && i==n){
                return 1;
            }

            if(i>=n){
                return 0;
            }

            const add=solve(i+1,curr+nums[i]);
            const sub=solve(i+1,curr-nums[i]);

            return add+sub;
        }

        return solve(0,0);
    }
}
