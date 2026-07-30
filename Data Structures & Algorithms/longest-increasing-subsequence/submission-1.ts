class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const n = nums.length;
        const memo = Array.from({ length: n }, () => new Array(n + 1).fill(-1));
        function solve(currIndex: number, prevIndex: number) {
            if (currIndex >= nums.length) return 0;
            if (memo[currIndex][prevIndex + 1] !== -1) return memo[currIndex][prevIndex + 1];
            let skip = solve(currIndex + 1, prevIndex);
            let notSkip = 0;
            if (prevIndex === -1 || nums[currIndex] > nums[prevIndex]) {
                notSkip = 1 + solve(currIndex + 1, currIndex);
            }
            return (memo[currIndex][prevIndex + 1] = Math.max(skip, notSkip));
        }

        return solve(0, -1);
    }
}
