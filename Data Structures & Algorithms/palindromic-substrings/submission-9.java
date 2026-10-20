class Solution {

    private int getPallindromes(int left,int right,String s){
        int hit=0;
        while(left>=0 && right<s.length()){
            if(s.charAt(left)==s.charAt(right)){
                left--;
                right++;
                hit++;
            }
            else{
                return hit;
            }
        }

        return hit;
    }

    public int countSubstrings(String s) {
        int n=s.length();
        int count=0;
        for(int i=0;i<n;i++){
            int even=getPallindromes(i,i+1,s);
            int odd=getPallindromes(i,i,s);
            count+=(odd+even);
        }
        return count;
    }
}
