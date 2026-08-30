class Solution {

    List<List<Integer>>res=new ArrayList<>();

    void solve(int[] nums,int index, List<Integer>temp){
        //Base case
        if(index>=nums.length){
            res.add(new ArrayList<Integer>(temp));
            return;
        }
        temp.add(nums[index]);
        solve(nums,index+1,temp);
        temp.removeLast();
        solve(nums,index+1,temp);
    }

    public List<List<Integer>> subsets(int[] nums) {
        List<Integer>temp=new ArrayList<>();
        solve(nums,0,temp);
        return res;
    }
}
