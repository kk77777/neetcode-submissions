class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxArea=0;
        const n=heights.length;


        let st=[];

        function calculateArea(rb:number){
            const height=heights[st.pop()];
            const lb=st.length?st[st.length-1]:-1;
            const width=rb-lb-1;
            const currArea=width*height;
            
            maxArea=Math.max(maxArea,currArea);
        }

        for(let i=0;i<n;i++){
            while(st.length && heights[st[st.length-1]]>heights[i]){
                calculateArea(i);
            }
            st.push(i);
        }

        while(st.length){
            calculateArea(heights.length);
        }


        return maxArea;
    }
}
