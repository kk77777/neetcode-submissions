class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const n=s.length;
        let res=0;

        const freq=new Map<string,number>();

        let l=0,maxF=0;

        for(let r=0;r<n;r++){
            freq.set(s[r],(freq.get(s[r])||0)+1);
            maxF=Math.max(maxF,freq.get(s[r]));
            while(r-l+1-maxF>k){
                freq.set(s[l],freq.get(s[l])-1);
                l++;
            }
            res=Math.max(res,r-l+1);
        }
        return res;
    }
}
