class MaxHeap {
    private heap: number[] = [];

    public push(val: number): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    public pop(): number | undefined {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return max;
    }

    public size(): number {
        return this.heap.length;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length;
        while (true) {
            let largest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < length && this.heap[right] > this.heap[largest]) largest = right;

            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const freqMap = new Map<string, number>();
        for (const task of tasks) {
            freqMap.set(task, (freqMap.get(task) || 0) + 1);
        }
        const maxHeap = new MaxHeap();

        for (const count of freqMap.values()) {
            maxHeap.push(count);
        }

        const q: [number, number][] = [];

        let time = 0;

        while (maxHeap.size() > 0 || q.length > 0) {
            time++;

            if (maxHeap.size() > 0) {
                const cnt = maxHeap.pop()! - 1;
                if (cnt > 0) {
                    q.push([cnt, time + n]);
                }
            }

            if (q.length > 0 && q[0][1] === time) {
                const [readyCnt] = q.shift();
                maxHeap.push(readyCnt);
            }
        }

        return time;
    }
}
