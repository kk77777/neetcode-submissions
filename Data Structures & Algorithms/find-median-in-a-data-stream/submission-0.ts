class MinHeap {
    private heap: number[] = [];

    size(): number {
        return this.heap.length;
    }

    peek(): number {
        return this.heap[0];
    }

    push(val: number): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number | undefined {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return top;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);
            if (this.heap[parentIdx] <= this.heap[index]) break;
            [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
            index = parentIdx;
        }
    }

    private bubbleDown(index: number): void {
        const lastIdx = this.heap.length - 1;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left <= lastIdx && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right <= lastIdx && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

class MaxHeap {
    private heap: number[] = [];

    size(): number {
        return this.heap.length;
    }

    peek(): number {
        return this.heap[0];
    }

    push(val: number): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number | undefined {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return top;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);
            if (this.heap[parentIdx] >= this.heap[index]) break;
            [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
            index = parentIdx;
        }
    }

    private bubbleDown(index: number): void {
        const lastIdx = this.heap.length - 1;
        while (true) {
            let largest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left <= lastIdx && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right <= lastIdx && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

class MedianFinder {

    private small:MaxHeap;
    private large:MinHeap;

    constructor() {
        this.small=new MaxHeap();
        this.large=new MinHeap();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {

        this.small.push(num);

        if(this.small.size()>0 && this.large.size()>0 && this.small.peek()>this.large.peek()){
            const val=this.small.pop();
            this.large.push(val);
        }

        if(this.small.size()-this.large.size()>1){
            const val=this.small.pop();
            this.large.push(val);
        }else if(this.large.size()-this.small.size()>1){
            const val=this.large.pop();
            this.small.push(val);
        }
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        if(this.small.size()>this.large.size()){
            return this.small.peek();
        }
        else if(this.large.size()>this.small.size()){
            return this.large.peek();
        }

        return (this.small.peek()+this.large.peek())/2;
    }
}
