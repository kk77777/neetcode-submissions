class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const m=nums1.length;
        const n=nums2.length;

        let i=0,j=0,k=0;
        let temp=new Array(m+n).fill(0);
        while(i<m && j<n){
            if(nums1[i]<nums2[j]){
                temp[k++]=nums1[i++];
            }
            else{
                temp[k++]=nums2[j++];
            }
        }

        while(i<m){
            temp[k++]=nums1[i++];
        }

        while(j<n){
            temp[k++]=nums2[j++];
        }

        if((m+n)%2!==0){
            let med=Math.floor((m+n)/2);
            return temp[med];
        }
        else{
            let med1=Math.floor((m+n-1)/2);
            let med2=Math.floor((m+n-1)/2)+1;

            return (temp[med1]+temp[med2])/2;
        }
    }
}
