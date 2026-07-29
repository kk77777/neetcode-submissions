function checkP(s:string,i:number,j:number,dp:(boolean|undefined)[][]){
    if(i>=j) return true;
    if(dp[i][j]!==undefined){
        return dp[i][j];
    }
    if(s[i]==s[j]){
        return dp[i][j]=checkP(s,i+1,j-1,dp);
    }

    return dp[i][j]=false;
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        const n=s.length;
        const dp:(boolean|undefined)[][]=Array.from({length:n},()=>Array(n).fill(undefined));
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
