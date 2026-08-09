class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let freqS1 = new Map<string, number>();

        for (let c of s1) {
            if (!freqS1.has(c)) {
                freqS1.set(c, 0);
            }
            freqS1.set(c, freqS1.get(c)! + 1);
        }

        let need = freqS1.size;

        for (let i = 0; i < s2.length; i++) {
            let freqS2 = new Map<string, number>();
            let curr = 0;

            for (let j = i; j < s2.length; j++) {
                let c = s2[j];

                if (!freqS1.has(c)) {
                    break;
                }

                if (!freqS2.has(c)) {
                    freqS2.set(c, 0);
                }

                freqS2.set(c, freqS2.get(c)! + 1);

                let c1 = freqS1.get(c)!;
                let c2 = freqS2.get(c)!;

                if (c1 < c2) {
                    break;
                }

                if (c1 === c2) {
                    curr++;
                }

                if (curr === need && j - i + 1 === s1.length) {
                    return true;
                }
            }
        }

        return false;
    }
}
