class Heap<T> {
    heap: T[];
    compare: (a: T, b: T) => boolean;

    constructor(compare: (a: T, b: T) => boolean) {
        this.heap = [];
        this.compare = compare;
    }

    size(): number {
        return this.heap.length;
    }

    peek(): T | undefined {
        return this.heap[0];
    }

    push(val: T): void {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop(): T | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const top = this.heap[0];

        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();

        return top;
    }

    bubbleUp(): void {
        let idx = this.heap.length - 1;

        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);

            if (this.compare(this.heap[parent], this.heap[idx])) {
                break;
            }

            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];

            idx = parent;
        }
    }

    bubbleDown(): void {
        let idx = 0;

        while (true) {
            const left = idx * 2 + 1;
            const right = idx * 2 + 2;

            let best = idx;

            if (left < this.heap.length && !this.compare(this.heap[best], this.heap[left])) {
                best = left;
            }

            if (right < this.heap.length && !this.compare(this.heap[best], this.heap[right])) {
                best = right;
            }

            if (best === idx) {
                break;
            }

            [this.heap[idx], this.heap[best]] = [this.heap[best], this.heap[idx]];

            idx = best;
        }
    }
}


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const heap=new Heap<number>((a,b)=>a>=b);

        for(let num of nums){
            heap.push(num);
        }

        let ans=-1;
        while(k){
            ans=heap.pop();
            k--;
        }

        return ans;
    }
}
