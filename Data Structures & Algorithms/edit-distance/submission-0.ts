class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1: string, word2: string): number {
        const l1 = word1.length;
        const l2 = word2.length;

        const memo = Array.from({ length: l1 + 1 }, () => new Array(l2 + 1).fill(-1));

        function solve(i: number, j: number) {
            if (i === l1) return l2 - j;
            if (j === l2) return l1 - i;

            if (memo[i][j] !== -1) return memo[i][j];

            if (word1[i] === word2[j]) {
                return solve(i + 1, j + 1);
            }

            //add
            let add = 1 + solve(i, j + 1);

            //remove
            let remove = 1 + solve(i + 1, j);

            // replace
            let replace = 1 + solve(i + 1, j + 1);

            return (memo[i][j] = Math.min(add, remove, replace));
        }

        return solve(0, 0);
    }
}
