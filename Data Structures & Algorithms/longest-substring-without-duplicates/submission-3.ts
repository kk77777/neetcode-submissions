class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const n=s.length;
        if(n===0) return 0;
        if(n===1) return 1;
        let res=1;

        let vis=new Array(26).fill(false);

        let index=s[0].charCodeAt(0)-'a'.charCodeAt(0)
        vis[index]=true;

        let l=0,r=1;

        while(r<n){
            let rIndex=s[r].charCodeAt(0)-'a'.charCodeAt(0);
            while(vis[rIndex]===true){
            let lIndex=s[l].charCodeAt(0)-'a'.charCodeAt(0);
                vis[lIndex]=false;
                l++;
            }
            vis[rIndex]=true;
            res=Math.max(res,r-l+1);
            r++;
        }

        return res;
    }
}
