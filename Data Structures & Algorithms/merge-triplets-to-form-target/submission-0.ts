class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets: number[][], target: number[]): boolean {
        const [x, y, z] = target;

        let foundX = false;
        let foundY = false;
        let foundZ = false;

        for (const [a, b, c] of triplets) {
            if (a > x || b > y || c > z) continue;

            if (a === x) foundX = true;
            if (b === y) foundY = true;
            if (c === z) foundZ = true;

            if (foundX && foundY && foundZ) return true;
        }

        return foundX && foundY && foundZ;
    }
}
