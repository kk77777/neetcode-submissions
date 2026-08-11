class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const n = s.length;
        if (n === 1) return false;

        const st = [];

        for (let b of s) {
            if (b === ")") {
                if (st.length === 0) return false;
                if (st[st.length - 1] !== "(") return false;
                st.pop();
            } else if (b === "]") {
                if (st.length === 0) return false;
                if (st[st.length - 1] !== "[") return false;
                st.pop();
            } else if (b === "}") {
                if (st.length === 0) return false;
                if (st[st.length - 1] !== "{") return false;
                st.pop();
            }else{
                st.push(b);
            }
        }

        if(st.length!==0) return false;
        return true;
    }
}
