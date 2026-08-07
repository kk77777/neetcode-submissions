class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const n=nums.length;
        if(n===0) return 0;
        nums.sort((a,b)=>a-b);
        //[2,3,4,4,5,10,20]
        
        let res=0;
        let curr=nums[0];
        let streak=0;
        let i=0;

        while(i<n){
            if(curr!==nums[i]){
                curr=nums[i];
                streak=0;
            }
            while(i<n && nums[i]===curr){
                i++;
            }
            streak++;
            curr++;
            res=Math.max(res,streak);
        }

        return res;
    }
}
