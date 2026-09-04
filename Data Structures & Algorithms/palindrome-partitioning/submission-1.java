class Solution {

    List<List<String>>res=new ArrayList<>();

    boolean isPalindrome(String s) {
        int l = 0, r = s.length() - 1;
        while (l < r) {
            if (s.charAt(l) != s.charAt(r))
                return false;
            l++;
            r--;
        }

        return true;
    }

    void solve(String s, List<String> temp, int index) {
        // Base case
        if (index == s.length()) {
            res.add(new ArrayList<String>(temp));
        }

        for (int i = index; i < s.length(); i++) {
            String sub = s.substring(index, i + 1);
            if (!isPalindrome(sub))
                continue;

            temp.add(sub);
            solve(s, temp, i + 1);
            temp.removeLast();
        }
    }

    public List<List<String>> partition(String s) {
        List<String>temp=new ArrayList<>();
        solve(s,temp,0);
        return res;
    }
}
