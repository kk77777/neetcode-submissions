class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet=new Set(nums);
        let res=0;
        for(let num of numSet){
            if(!numSet.has(num-1)){
                let l=1;
                while(numSet.has(num+l)){
                    l++;
                }
                res=Math.max(res,l);
            }
        }

        return res;
    }
}
