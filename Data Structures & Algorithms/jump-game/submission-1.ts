class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        let maxReach=0;
        const n=nums.length;
        for(let i=0;i<n;i++){
            if(i>maxReach) return false;
            maxReach=Math.max(maxReach,i+nums[i]);
            if(maxReach>=n-1) return true;
        }
    }
}
