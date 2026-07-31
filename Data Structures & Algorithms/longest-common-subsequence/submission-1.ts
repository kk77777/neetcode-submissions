class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {

        const l1=text1.length;
        const l2=text2.length;

        const memo=Array.from({length:l1},()=>Array(l2).fill(-1));

        function solve(i:number,j:number){
            if(i>=l1 || j>=l2){
                return 0;
            }

            if(memo[i][j]!==-1){
                return memo[i][j];
            }

            if(text1[i]===text2[j]){
                 return memo[i][j]=1+solve(i+1,j+1);
            }
            else{
                return memo[i][j]=Math.max(solve(i+1,j),solve(i,j+1));
            }
        }

        return solve(0,0);
    }
}
