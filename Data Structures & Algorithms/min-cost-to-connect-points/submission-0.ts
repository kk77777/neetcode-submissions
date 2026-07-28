export class Heap<T> {
    protected heap: T[] = [];
    private compare: (a: T, b: T) => number;

    /**
     * @param compareFn Comparator returning:
     * - Negative (< 0): 'a' has higher priority than 'b'
     * - Positive (> 0): 'b' has higher priority than 'a'
     * - Zero (0): equal priority
     */
    constructor(compareFn: (a: T, b: T) => number) {
        this.compare = compareFn;
    }

    public size(): number {
        return this.heap.length;
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    public peek(): T | undefined {
        return this.heap[0];
    }

    public push(val: T): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    public pop(): T | undefined {
        if (this.isEmpty()) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return top;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length;

        while (true) {
            let highestPriority = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;

            if (
                leftChild < length &&
                this.compare(this.heap[leftChild], this.heap[highestPriority]) < 0
            ) {
                highestPriority = leftChild;
            }

            if (
                rightChild < length &&
                this.compare(this.heap[rightChild], this.heap[highestPriority]) < 0
            ) {
                highestPriority = rightChild;
            }

            if (highestPriority !== index) {
                this.swap(index, highestPriority);
                index = highestPriority;
            } else {
                break;
            }
        }
    }

    private swap(i: number, j: number): void {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

export class MinHeap<T> extends Heap<T> {
    /**
     * @param selectorOrCompare A key extraction function (e.g., x => x.val) OR a custom comparator.
     * Defaults to primitive numeric comparison if omitted.
     */
    constructor(selectorOrCompare?: ((item: T) => number) | ((a: T, b: T) => number)) {
        if (!selectorOrCompare) {
            super((a, b) => (a as unknown as number) - (b as unknown as number));
        } else {
            super((a, b) => {
                const res = selectorOrCompare(a, b);
                // If function accepts 1 parameter, treat it as a key selector
                if (selectorOrCompare.length === 1) {
                    const keySelector = selectorOrCompare as (item: T) => number;
                    return keySelector(a) - keySelector(b);
                }
                return res;
            });
        }
    }
}

type P = {
    node: number;
    dist: number;
};

class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points: number[][]): number {
        const n = points.length;
        const vis = new Set<number>();
        const pq = new MinHeap<P>((item) => item.dist);

        pq.push({ node: 0, dist: 0 });

        let totalCost = 0;

        while (vis.size < n && !pq.isEmpty()) {
            const { node, dist } = pq.pop();
            if (vis.has(node)) continue;

            vis.add(node);
            totalCost += dist;

            for (let next = 0; next < n; next++) {
                if (!vis.has(next)) {
                    const d =
                        Math.abs(points[node][0] - points[next][0]) +
                        Math.abs(points[node][1] - points[next][1]);
                    pq.push({ node: next, dist: d });
                }
            }
        }

        return totalCost;
    }
}
