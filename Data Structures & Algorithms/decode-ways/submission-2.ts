class Solution {
    private dp:number[];
    solve(i: number, s: string, n: number): number {

        if(this.dp[i]!==-1){
            return this.dp[i];
        }

        if (i === n) {
            return this.dp[i]=1;
        }

        if (s[i] == "0") {
            return this.dp[i]=0;
        }

        let result = this.solve(i + 1, s, n);

        if (i + 1 < n) {
            if (s[i] == "1" || (s[i] == "2" && s[i + 1] <="6")) {
                result += this.solve(i + 2, s, n);
            }
        }

        return this.dp[i]=result;
    }

    /**
     * @param {string} s
     * @return {number}
     */

    numDecodings(s: string): number {
        const n = s.length;
        this.dp=new Array(101).fill(-1);
        return this.solve(0, s, n);
    }
}
