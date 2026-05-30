class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const m=nums1.length;
        const n=nums2.length;
        if(m>n){
            return this.findMedianSortedArrays(nums2,nums1);
        }

        let low=0,high=m;
        while(low<=high){
            const px=low+Math.floor((high-low)/2);
            const py=Math.floor((m+n+1)/2)-px;

            const x1=(px==0)?-Infinity:nums1[px-1];
            const x3=(px==m)?Infinity:nums1[px];

            const x2=(py==0)?-Infinity:nums2[py-1];
            const x4=(py==n)?Infinity:nums2[py];

            if(x1<=x4 && x2<=x3){
                if((m+n)%2==0){
                    return (Math.max(x1,x2)+Math.min(x3,x4))/2;
                }
                return Math.max(x1,x2);
            }
            else if(x1>x4){
                high=px-1;
            }
            else{
                low=px+1;
            }
        }

        return -1;
    }
}
