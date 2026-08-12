class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        const n=nums.length;
        let l=0,h=n-1;
        while(l<=h){
            const mid=l+Math.floor((h-l)/2);
            if(nums[mid]===target) return mid;
            if(nums[mid]>target) h=mid-1;
            else l=mid+1;
        }

        return -1;
    }
}
