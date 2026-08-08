class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const n=heights.length;
        let i=0, j=n-1;
        let maxArea=0

        while(i<j){
            let currArea=Math.min(heights[i],heights[j])*(j-i);
            maxArea=Math.max(maxArea,currArea)
            if(heights[i]<heights[j]){
                i++;
            }else{
                j--;
            }         
        }

        return maxArea;
    }
}
