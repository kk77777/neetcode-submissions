class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const sl=s.length;
        const st=t.length;

        if(sl<st) return "";

        const freq=new Map<string,number>();
        for(const c of t){
            freq.set(c, (freq.get(c) ?? 0) - 1);
        }

        let i=0,j=0;
        let count=st;
        let minWindowL=Infinity;
        let res="";
        while(j<sl){
            if(freq.has(s[j])){
                const currCnt=freq.get(s[j])!+1;
                if(currCnt<=0){
                    count--;
                }
                    freq.set(s[j],currCnt);
            }
            while(count===0){
                const currMinWindowL=j-i+1;
                if(currMinWindowL<minWindowL){
                    minWindowL=currMinWindowL;
                    res=s.slice(i,j+1);
                }
                if(freq.has(s[i])){
                    const currCnt=freq.get(s[i])!-1;
                    freq.set(s[i],currCnt);
                    if(currCnt<0){
                        count++;
                    }
                }
                i++;
            }
            j++;
        }

        return res;
    }
}
