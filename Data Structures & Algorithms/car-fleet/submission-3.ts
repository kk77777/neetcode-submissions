class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const n = position.length;
        const st: number[] = [];
        const t = [];
        for (let i = 0; i < n; i++) {
            t.push([position[i], (target - position[i]) / speed[i]]);
        }

        t.sort((a, b) => b[0] - a[0]);
        // st.push(t[0][1]);
        let i = 0;
        while (i < n) {
            if (st.length === 0 || st[st.length - 1] < t[i][1]) {
                st.push(t[i][1]);
            }
            i++;
        }

        return st.length;
    }
}
