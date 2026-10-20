class Solution {
    public int countSubstrings(String s) {
        int n=s.length();
        int count=0;

        boolean[][] dp=new boolean[n][n];
        for(int i=0;i<n;i++){
            dp[i][i]=true;
            count++;
        }
        for(int i=0;i<n-1;i++){
            dp[i][i+1]=(s.charAt(i)==s.charAt(i+1));
            if(dp[i][i+1]){
                count++;
            }
        }

        for(int len=3;len<=n;len++){
            for(int i=0;i<=n-len;i++){
                int j=i+len-1;
                dp[i][j]=dp[i+1][j-1]&&(s.charAt(i)==s.charAt(j));
                if(dp[i][j]){
                    count++;
                }
            }
        }

        return count;
    }
}
