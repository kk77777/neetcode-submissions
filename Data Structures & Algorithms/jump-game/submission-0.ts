class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {

        const n=nums.length;
        if(nums.length===1) return true;
        if(nums[0]===0) return false;

        function solve(i:number){
            // console.log('i = ',i,n-1,i===n-1);
            if(i===n-1) return true;
            if(i>=n) return false;
            let canReach=false;
            for(let k=1;k<=nums[i];k++){
                canReach=canReach||solve(i+k);
            }

            return canReach;
        }

        return solve(0);
    }
}
