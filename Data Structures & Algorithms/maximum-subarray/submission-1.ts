class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        const n = nums.length;
        let maxSum = nums[0];
        let sum = nums[0];
        let currSum=0;
        for(let i=0;i<n;i++){
            currSum=Math.max(nums[i],currSum+nums[i]);
            maxSum=Math.max(maxSum,currSum);
        }
        return maxSum;
    }
}
