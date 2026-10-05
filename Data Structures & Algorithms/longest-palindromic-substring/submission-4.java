class Solution {

    private Boolean[][] dp;

    private boolean isPalindrome(String s, int i, int j){
        
        if(i>j) return true;

        if(dp[i][j]!=null){
            return dp[i][j];
        }

        if(s.charAt(i)!=s.charAt(j)){
            return dp[i][j]=false;
        }

        return dp[i][j]=isPalindrome(s,i+1,j-1);
    }


    public String longestPalindrome(String s) {
        int n=s.length();
        dp=new Boolean[n][n];
        String res="";
        int maxLen=0;
        for(int i=0;i<n;i++){
            for(int j=i;j<n;j++){
                if(isPalindrome(s,i,j)){
                    if(maxLen<j-i+1){
                        maxLen=j-i+1;
                        res=s.substring(i,j+1);
                    }
                }
            }
        }

        return res;
    }
}
