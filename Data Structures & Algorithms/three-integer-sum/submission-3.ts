class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const n = nums.length;
        let res = [];
        nums.sort((a, b) => a - b);
        console.log('nums = ',nums);
        for (let i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i + 1,
                k = n - 1;
            let target = -nums[i];
            while (j < k) {
                let curr = nums[j] + nums[k];
                if (curr === target) {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while(j<n && k>=0 && nums[j]===nums[j-1] && nums[k]===nums[k+1]){
                        j++;
                        k--;
                    } 
                } else if (curr > target) k--;
                else j++;
            }
        }
        return res;
    }
}
