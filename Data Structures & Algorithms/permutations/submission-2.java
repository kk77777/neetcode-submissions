class Solution {
    List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> permute(int[] nums) {
        solve(nums, 0);
        return res;
    }

    void solve(int[] nums, int index) {
        // Base case
        if (index == nums.length) {
            List<Integer> current = new ArrayList<>();

            for (int num : nums) {
                current.add(num);
            }

            res.add(current);
            return;
        }

        for (int i = index; i < nums.length; i++) {
            swap(nums, index, i);
            solve(nums, index + 1);
            swap(nums, index, i);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}