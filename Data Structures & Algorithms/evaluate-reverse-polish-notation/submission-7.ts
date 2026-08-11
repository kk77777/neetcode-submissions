class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const n = tokens.length;
        let st: number[] = [];
        for (let token of tokens) {
            if (!isNaN(Number(token))) {
                st.push(Number(token));
            } else {
                let num1 = st.pop();
                let num2 = st.pop();
                if (token === "+") {
                    st.push(num2 + num1);
                } else if (token === "-") {
                    st.push(num2 - num1);
                } else if (token === "*") {
                    st.push(num2 * num1);
                } else {
                    st.push(Math.trunc(num2 / num1));
                }
            }
        }

        return st[0];
    }
}
