class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack = [];
        let maxArea = 0;

        const calculateArea = (rightBoundary:number) => {
            const height = heights[stack.pop()];
            const leftBoundary = stack.length ? stack[stack.length - 1] : -1;

            const width = rightBoundary - leftBoundary - 1;

            maxArea = Math.max(maxArea, height * width);
        };

        for (let i = 0; i < heights.length; i++) {
            while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
                calculateArea(i);
            }

            stack.push(i);
        }

        while (stack.length) {
            calculateArea(heights.length);
        }

        return maxArea;
    }
}
