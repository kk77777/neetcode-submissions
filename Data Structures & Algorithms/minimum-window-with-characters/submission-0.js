class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length>s.length) return "";
        const countT={};
        const window={};
        let res=[-1,1];
        let resLen=Infinity;

        for(const c of t){
            countT[c]=(countT[c]||0)+1;
        }

        let have=0;
        let need=Object.keys(countT).length;

        let left=0;
        for(let right=0;right<s.length;right++){
            const c=s[right];

            window[c]=(window[c]||0)+1;

            if(countT[c] && window[c]==countT[c]){
                have++;
            }

            while(have==need){
                if((right-left+1)<resLen){
                    resLen=right-left+1;
                    res=[left,right];
                }

                window[s[left]]--;

                if(countT[s[left]] && window[s[left]]<countT[s[left]]){
                    have--;
                }

                left++;
            }
        }

        const [l,r]=res;
        return resLen!=Infinity ? s.slice(l,r+1):"";
    }
}
