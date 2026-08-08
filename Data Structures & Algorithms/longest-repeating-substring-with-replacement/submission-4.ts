class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const n=s.length;
        let res=0;

        let st=new Set(s);

        for(let c of st){
            let cnt=0;
            let l=0;
            for(let r=0;r<n;r++){
                if(s[r]===c){
                    cnt++;
                }
                while(r-l+1-cnt>k){
                    if(s[l]===c){
                        cnt--;
                    }
                    l++;
                }

                res=Math.max(res,r-l+1);
            }
        }


        return res;
    }
}
