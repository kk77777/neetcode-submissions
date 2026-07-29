function checkP(s:string,i:number,j:number){
    if(i>=j) return true;
    if(s[i]==s[j]){
        return checkP(s,i+1,j-1);
    }

    return false;
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        const n=s.length;
        let count=0;
        for(let i=0;i<n;i++){
            for(let j=i;j<n;j++){
                if(checkP(s,i,j)){
                    count++;
                }
            }
        }

        return count;
    }
}
