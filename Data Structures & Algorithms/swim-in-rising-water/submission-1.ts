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

function isSafe(x: number, y: number, n: number): boolean {
    if (x < 0 || x >= n || y < 0 || y >= n) return false;
    return true;
}

type P = {
    time: number;
    coordinates: {
        x: number;
        y: number;
    };
};

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid: number[][]): number {
        const n = grid.length;
        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        const pq = new MinHeap<P>((item: P) => item.time);
        const res = Array.from({ length: n }, () => Array(n).fill(Infinity));
        res[0][0] = grid[0][0];
        pq.push({ time: grid[0][0], coordinates: { x: 0, y: 0 } });

        while (!pq.isEmpty()) {
            const top = pq.pop();
            const { time: currTime, coordinates } = top;
            const { x, y } = coordinates;
            if (x == n - 1 && y == n - 1) {
                return currTime;
            }

            if (currTime > res[x][y]) {
                continue;
            }

            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;

                if (isSafe(nx, ny, n)) {
                    const nextTime = Math.max(currTime, grid[nx][ny]);

                    if (nextTime < res[nx][ny]) {
                        res[nx][ny] = nextTime;
                        pq.push({
                            time: nextTime,
                            coordinates: {
                                x: nx,
                                y: ny,
                            },
                        });
                    }
                }
            }
        }

        return res[n - 1][n - 1];
    }
}
