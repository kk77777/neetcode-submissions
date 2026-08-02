class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        const n=nums.length; 

        const memo=new Array(n).fill(-1);

        function solve(i:number){
            if(i>=n-1) return 0;

            if(memo[i]!==-1) return memo[i];

            let numberOfJump=0;
            let minJump=Infinity;
            for(let k=1;k<=nums[i];k++){
                numberOfJump=1+solve(i+k);
                minJump=Math.min(minJump,numberOfJump);
            }

            return memo[i]=minJump;
            

        }

        return solve(0);
    }
}
