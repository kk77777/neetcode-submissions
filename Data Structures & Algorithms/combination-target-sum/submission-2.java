class Solution {
    List<List<Integer>> res = new ArrayList<>();

    void solve(int[] nums, int target, int index, List<Integer> temp) {
        if (target == 0) {
            res.add(new ArrayList<Integer>(temp));
            return;
        }

        if (target < 0 || index >= nums.length) {
            return;
        }

        // take the current index
        temp.add(nums[index]);
        solve(nums, target - nums[index], index, temp);
        temp.removeLast();

        // skip the current index
        solve(nums, target, index + 1, temp);
    }

    public List<List<Integer>> combinationSum(int[] nums, int target) {
        List<Integer> temp = new ArrayList<>();
        solve(nums, target, 0, temp);
        return res;
    }
}
