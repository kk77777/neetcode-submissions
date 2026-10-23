class Solution {
    public int numDecodings(String s) {
        int n = s.length();
        int[] ways = new int[n + 1];
        ways[0] = 1;
        ways[1] = s.charAt(0) >= '1' ? 1 : 0;
        for (int i = 2; i <= n; i++) {
            if(s.charAt(i-1)!='0'){
                ways[i]+=ways[i-1];
            }
            if (s.charAt(i - 2) != '0' && Integer.parseInt(s.substring(i - 2, i)) <= 26)
                ways[i]+=ways[i - 2];
        }

        return ways[n];
    }
}
