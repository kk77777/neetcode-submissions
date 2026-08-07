const isAlphanumeric = (str) => /^[a-z0-9]+$/i.test(str);

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const n=s.length;
        let l=0,r=n-1;
        while(l<r){
            while(l<n && !isAlphanumeric(s[l])) l++;
            while(r>=0 && !isAlphanumeric(s[r])) r--;
            if(l>=n || r<0) return true;
            if(s[l].toLowerCase()!==s[r].toLowerCase()){
                return false;
            };
            l++;
            r--;
        }

        return true;
    }
}
