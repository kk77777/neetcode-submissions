class Solution {
    List<List<Integer>> res = new ArrayList<>();

    void solve(int[] candidates, int target, int index, List<Integer> temp) {
        if (target == 0) {
            res.add(new ArrayList<>(temp));
            return;
        }
        if (target<0||index >= candidates.length)
            return;

        // take index
        temp.add(candidates[index]);
        solve(candidates, target - candidates[index], index + 1, temp);
        temp.removeLast();

        // not take index
        int nextIndex = index + 1;
        while (nextIndex < candidates.length && candidates[nextIndex] == candidates[index]) {
            nextIndex++;
        }
        solve(candidates, target, nextIndex, temp);
    }

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<Integer> temp = new ArrayList<>();

        Arrays.sort(candidates);

        solve(candidates, target, 0, temp);

        return res;
    }
}
