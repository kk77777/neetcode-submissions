class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const n=heights.length;
        let i=0, j=n-1;
        let maxArea=Math.min(heights[i],heights[j])*(j-i);

        while(i<j){
            maxArea=Math.max(maxArea,Math.min(heights[i],heights[j])*(j-i))
            if(heights[i]<heights[j]){
                i++;
            }else{
                j--;
            }         
        }

        return maxArea;
    }
}
