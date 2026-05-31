class MaxHeap {
    heap:number[];
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(val:number) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);

            if (this.heap[parent] >= this.heap[idx]) {
                break;
            }

            [this.heap[parent], this.heap[idx]] =
                [this.heap[idx], this.heap[parent]];

            idx = parent;
        }
    }

    extractMax() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.bubbleDown();

        return max;
    }

    bubbleDown() {
        let idx = 0;

        while (true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let largest = idx;

            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

            if (largest === idx) {
                break;
            }

            [this.heap[idx], this.heap[largest]] =
                [this.heap[largest], this.heap[idx]];

            idx = largest;
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const heap=new MaxHeap();

        for(const stone of stones){
            heap.insert(stone);
        }
        while(heap.size()>1){
            const y=heap.extractMax();
            const x=heap.extractMax();
            if(y!=x){
                heap.insert(y-x);
            }
        }

        return heap.size()?heap.peek():0;
    }
}
