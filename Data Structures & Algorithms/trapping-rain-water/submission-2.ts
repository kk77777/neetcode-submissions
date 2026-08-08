class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const n=height.length;
        const leftMax=new Array(n).fill(0);
        const rightMax=new Array(n).fill(0);


        leftMax[0]=height[0];
        for(let i=1;i<n;i++){
            leftMax[i]=Math.max(leftMax[i-1],height[i]);
        }

        rightMax[n-1]=height[n-1];
        for(let i=n-2;i>=0;i--){
            rightMax[i]=Math.max(rightMax[i+1],height[i]);
        }

        let maxRainWater=0;
        for(let i=1;i<n-1;i++){
            maxRainWater+=(Math.min(leftMax[i],rightMax[i])-height[i]);
        }

        return maxRainWater;
    }
}
