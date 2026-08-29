class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] freq=new int[26];

        for(char task:tasks){
            freq[task-'A']++;
        }

        int maxFreq=0;

        for(int count:freq){
            maxFreq=Math.max(maxFreq,count);
        }

        int slots=(maxFreq-1)*(n+1);

        for(int count:freq){
            if(count==maxFreq){
                slots++;
            }
        }

        return Math.max(slots,tasks.length);
    }
}
