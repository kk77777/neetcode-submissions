class MinHeap<T> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => number;

    constructor(compareFn: (a: T, b: T) => number) {
        this.compare = compareFn;
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    peek(): T | undefined {
        return this.heap[0];
    }

    push(val: T): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): T | undefined {
        if (this.isEmpty()) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return top;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parent]) < 0) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
            } else {
                break;
            }
        }
    }

    private bubbleDown(index: number): void {
        const n = this.heap.length;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }
            if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }

            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals: number[][], queries: number[]): number[] {
        intervals.sort((a, b) => a[0] - b[0]);

        const sortedQueries = queries.map((q, idx) => [q, idx]).sort((a, b) => a[0] - b[0]);

        const minHeap=new MinHeap<[number,number]>((a,b)=>a[0]-b[0]);

        const res:number[]=new Array(queries.length);

        let i=0;

        for(const [qVal,originalIdx] of sortedQueries){
            while(i<intervals.length && intervals[i][0]<=qVal){
                const [l,r]=intervals[i];
                const size=r-l+1;
                minHeap.push([size,r]);
                i++;
            }

            while(!minHeap.isEmpty() && minHeap.peek()![1]<qVal){
                minHeap.pop();
            }

            if(!minHeap.isEmpty()){
                res[originalIdx]=minHeap.peek()![0];
            }else{
                res[originalIdx]=-1;
            }
        }

        return res;
    }
}
