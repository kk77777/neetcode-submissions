class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1: string, s2: string, s3: string): boolean {
        const n1 = s1.length,
            n2 = s2.length,
            n3 = s3.length;

        if (n1 + n2 !== n3) return false;

        const memo = Array.from({ length: n1 + 1 }, () => new Array(n2 + 1).fill(undefined));

        function solve(i: number, j: number): boolean {
            if (i === n1 && j === n2) return true;

            let matchS1 = false,
                matchS2 = false;

            if (memo[i][j] !== undefined) {
                return memo[i][j];
            }

            if (i < n1 && s1[i] === s3[i + j]) {
                matchS1 = solve(i + 1, j);
            }
            if (j < n2 && s2[j] === s3[i + j]) {
                matchS2 = solve(i, j + 1);
            }

            return (memo[i][j] = matchS1 || matchS2);
        }

        return solve(0, 0);
    }
}
