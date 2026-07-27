class MinHeap<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => number;

  /**
   * @param compareFn Function that returns:
   * < 0 if 'a' should come before 'b' (higher priority)
   * > 0 if 'b' should come before 'a'
   * 0 if equal
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
      let smallest = index;
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;

      if (
        leftChild < length &&
        this.compare(this.heap[leftChild], this.heap[smallest]) < 0
      ) {
        smallest = leftChild;
      }

      if (
        rightChild < length &&
        this.compare(this.heap[rightChild], this.heap[smallest]) < 0
      ) {
        smallest = rightChild;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
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

interface HeapNode {
  node: number;
  dist: number;
}

class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const pq=new MinHeap<HeapNode>((a,b)=>a.dist-b.dist);

        const adj:Map<number,[number,number][]>=new Map();

        for(let i=1;i<=n;i++){
            adj.set(i,[]);
        }

        for(const[u,v,w] of times){
            adj.get(u)!.push([v,w]);
        }

        const dist=new Array(n+1).fill(Infinity);

        dist[k]=0;

        pq.push({node:k,dist:0});

        while(!pq.isEmpty()){
            const current=pq.pop();
            if(!current) break;

            const {node,dist:currentDist}=current;
            if(currentDist>dist[node]) continue;

            const neighbours=adj.get(node)||[];

            for(const [neighbour,weight] of neighbours){
                const newDist=currentDist+weight;

                if(newDist<dist[neighbour]){
                    dist[neighbour]=newDist;
                    pq.push({node:neighbour,dist:newDist});
                }
            }

        }

        let maxDelay=0;

        for(let i=1;i<=n;i++){
            if(dist[i]===Infinity) return -1;
            maxDelay=Math.max(maxDelay,dist[i]);
        }


        return maxDelay;

    }
}
