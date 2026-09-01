class Solution {

    List<List<Integer>>res=new ArrayList<>();

    void solve(int[] nums,int index,List<Integer>temp){

        // Base case
        if(index>=nums.length){
            res.add(new ArrayList<>(temp));
            return;
        }

        //take
        temp.add(nums[index]);
        //Skip duplicate index
        
        solve(nums,index+1,temp);


        //untake
        temp.removeLast();
        while(index<nums.length-1 && nums[index]==nums[index+1]){
            index++;
        }
        solve(nums,index+1,temp);

        

    }


    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);

        List<Integer>temp=new ArrayList<>();

        solve(nums,0,temp);

        return res;
    }
}
