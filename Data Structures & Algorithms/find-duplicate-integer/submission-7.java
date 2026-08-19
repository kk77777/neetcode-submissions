class Solution {
    public int findDuplicate(int[] nums) {
        int slow=0,fast=0;
        while(true){
            slow=nums[slow];
            fast=nums[nums[fast]];
            if(slow==fast) break;
        }

        int _slow=0;
        while(true){
            slow=nums[slow];
            _slow=nums[_slow];
            if(slow==_slow) return slow;
        }
    }
}
