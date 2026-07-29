function checkP(s:string,i:number,j:number,dp:number[][]){
    if(i>=j) return true;
    if(dp[i][j]){
        return dp[i][j];
    }
    if(s[i]==s[j]){
        return checkP(s,i+1,j-1,dp);
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
        const dp=Array.from({length:n},()=>Array(n).fill(false));
        let count=0;
        for(let i=0;i<n;i++){
            for(let j=i;j<n;j++){
                if(checkP(s,i,j,dp)){
                    count++;
                }
            }
        }

        return count;
    }
}
