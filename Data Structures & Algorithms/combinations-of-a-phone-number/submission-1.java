class Solution {
    List<String> res = new ArrayList<>();
    Map<Character, String> mp = new HashMap<>();

    void solve(String digits, int index, String temp) {

        //Base case
        if (index >= digits.length()) {
            res.add(temp);
            return;
        }

        String ch = mp.get(digits.charAt(index));
        for (int i = 0; i < ch.length(); i++) {
            solve(digits, index + 1, temp + ch.charAt(i));
        }
    }

    public List<String> letterCombinations(String digits) {
        if (digits == null || digits.isEmpty()) {
            return res;
        }

        mp.put('2', "abc");
        mp.put('3', "def");
        mp.put('4', "ghi");
        mp.put('5', "jkl");
        mp.put('6', "mno");
        mp.put('7', "pqrs");
        mp.put('8', "tuv");
        mp.put('9', "wxyz");

        solve(digits, 0, "");
        return res;
    }
}