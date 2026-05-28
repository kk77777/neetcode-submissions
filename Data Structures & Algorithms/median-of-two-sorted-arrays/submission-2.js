class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const m=nums1.length,n=nums2.length;
        let i=0,j=0,k=0;
        let idx1=Math.floor((m+n-1)/2),idx2=Math.floor((m+n)/2),element1=-1,element2=-1;
        while(i<m && j<n){
            if(nums1[i]<nums2[j]){
                if(k==idx1){
                    element1=nums1[i];
                }
                if(k==idx2){
                    element2=nums1[i];
                }
                i++;
            }
            else{
                if(k==idx1){
                    element1=nums2[j];
                }
                if(k==idx2){
                    element2=nums2[j];
                }
                j++;
            }
            k++;
        }
        while(i<m){
            if(k==idx1){
                element1=nums1[i];
            }
            if(k==idx2){
                element2=nums1[i];
            }
            i++;
            k++;
        }
        while(j<n){
            if(k==idx1){
                element1=nums2[j];
            }
            if(k==idx2){
                element2=nums2[j];
            }
            j++;
            k++;
        }
        if((m+n)%2==1){
            return element2;
        }else{
            return (element1+element2)/2;
        }
    }
}
