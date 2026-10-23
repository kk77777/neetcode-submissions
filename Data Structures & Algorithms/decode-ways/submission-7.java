class Solution {
    public int numDecodings(String s) {
        int n = s.length();
        int first = s.charAt(0) >= '1' ? 1 : 0;
        int second = 1;
        for (int i = 2; i <= n; i++) {
            int temp_res=0;
            if (s.charAt(i - 1) != '0') {
                temp_res+= first;
            }
            if (s.charAt(i - 2) != '0' && Integer.parseInt(s.substring(i - 2, i)) <= 26) {
                temp_res += second;
            }
            second = first;
            first = temp_res;
        }
       
        return first;
    }
}
