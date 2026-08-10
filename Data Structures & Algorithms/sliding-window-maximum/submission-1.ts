class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const dq=[];
        const res=[];
        const n=nums.length;
        for(let right=0;right<n;right++){
            while(dq.length && nums[dq[dq.length-1]]<nums[right]){
                dq.pop();
            }
            dq.push(right);
            if(dq[0]<right-k+1){
                dq.shift();
            }

            if(right>=k-1){
                res.push(nums[dq[0]]);
            }
        }

        return res;
    }
}
