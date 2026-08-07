class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n=nums.length;
        let leftProduct=1;
        let rightProduct=1;
        const res=new Array(n).fill(1);
        for(let i=0;i<n;i++){
            res[i]=leftProduct;
            leftProduct*=nums[i];
        }
        for(let i=n-1;i>=0;i--){
            res[i]*=rightProduct;
            rightProduct*=nums[i];
        }

        return res;
    }
}
