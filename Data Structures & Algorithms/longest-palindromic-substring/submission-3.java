class Solution {

    private boolean isPalindrome(String s, int i, int j){
        
        if(i>j) return true;

        if(s.charAt(i)!=s.charAt(j)){
            return false;
        }

        return isPalindrome(s,i+1,j-1);
    }


    public String longestPalindrome(String s) {
        int n=s.length();
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
