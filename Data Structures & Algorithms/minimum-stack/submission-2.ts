class MinStack {
    stack: number[][];
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const min=(this.stack.length===0)?val:Math.min(this.stack[this.stack.length-1][1],val);
        this.stack.push([val,min]);
    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.stack.length===0) return;
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1][0];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length-1][1];
    }
}
