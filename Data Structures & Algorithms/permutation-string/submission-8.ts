class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const n1=s1.length;
        const n2=s2.length;
        if(n1>n2) return false;

        let freqS1=new Array(26).fill(0);
        let freqS2=new Array(26).fill(0);

        for(let i=0;i<n1;i++){
            freqS1[s1.charCodeAt(i)-97]++;
            freqS2[s2.charCodeAt(i)-97]++;
        }

        let matches=0;
        for(let i=0;i<26;i++){
            if(freqS1[i]===freqS2[i]){
                matches++;
            }
        }

        let l=0;
        for(let r=n1;r<n2;r++){
            if(matches===26) return true;
            let idx=s2.charCodeAt(r)-97;
            freqS2[idx]++;
            if(freqS1[idx]===freqS2[idx]){
                matches++;
            }else if(freqS1[idx]+1===freqS2[idx]){
                matches--;
            }

            idx=s2.charCodeAt(l)-97;
            freqS2[idx]--;
            if(freqS1[idx]===freqS2[idx]){
                matches++;
            }else if(freqS1[idx]-1===freqS2[idx]){
                matches--;
            }

            l++;
        }

        return matches===26;

    }
}
