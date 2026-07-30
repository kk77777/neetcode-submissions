class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        const n = nums.length;
        let prevMax = nums[0];
        let prevMin = nums[0];
        let res = nums[0];
        for (let i = 1; i < n; i++) {
            const currMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
            const currMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);
            res = Math.max(res, currMax);
            prevMax = currMax;
            prevMin = currMin;
        }

        return res;
    }
}
