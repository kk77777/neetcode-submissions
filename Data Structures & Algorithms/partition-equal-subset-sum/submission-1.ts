class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const n = nums.length;
        if (n < 2) return false;
        let sum = 0;

        for (let num of nums) {
            sum += num;
        }

        if (sum % 2 !== 0) return false;

        const target=sum/2;
        const memo: boolean[][] = Array.from({ length: n }, () => new Array(target + 1).fill(undefined));

        function solve(index: number, remTarget: number) {
            if (remTarget === 0) {
                return true;
            }
            if (index >= n) {
                return false;
            }

            if(memo[index][remTarget]!==undefined){
                return memo[index][remTarget];
            }

            let exclude = solve(index + 1, remTarget);
            let include = false;

            if (nums[index] <= remTarget) {
                include = solve(index + 1, remTarget - nums[index]);
            }

            return memo[index][remTarget]=include || exclude;
        }

        return solve(0, sum / 2);
    }
}
