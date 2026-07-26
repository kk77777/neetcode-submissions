type Tweet = {
    time: number;
    tweetId: number;
};

class MaxHeap {
    private heap: Array<{ tweet: Tweet; userId: number; index: number }> = [];

    size(): number {
        return this.heap.length;
    }

    push(item: { tweet: Tweet; userId: number; index: number }): void {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): { tweet: Tweet; userId: number; index: number } | undefined {
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
            if (this.heap[parentIdx].tweet.time >= this.heap[index].tweet.time) break;
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

            if (left <= lastIdx && this.heap[left].tweet.time > this.heap[largest].tweet.time) {
                largest = left;
            }
            if (right <= lastIdx && this.heap[right].tweet.time > this.heap[largest].tweet.time) {
                largest = right;
            }

            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

class Twitter {

    private timeTracker:number;
    private tweets:Map<number,Tweet[]>;
    private follows:Map<number,Set<number>>;

    constructor() {
        this.timeTracker=0;
        this.tweets=new Map();
        this.follows=new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        if(!this.tweets.has(userId)){
            this.tweets.set(userId,[]);
        }
        this.tweets.get(userId)!.unshift({time:this.timeTracker++,tweetId});
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        const result:number[]=[];
        const maxHeap=new MaxHeap();

        const followees=new Set(this.follows.get(userId)||[]);
        followees.add(userId);

        for(const followeeId of followees){
            const userTweets=this.tweets.get(followeeId);
            if(userTweets && userTweets.length>0){
                maxHeap.push({
                    tweet:userTweets[0],
                    userId:followeeId,
                    index:0
                })
            }    
        }

        while(maxHeap.size()>0 && result.length<10){
            const top=maxHeap.pop();
            result.push(top.tweet.tweetId);

            const nextIndex=top.index+1;
            const userTweets=this.tweets.get(top.userId);

            if(userTweets && nextIndex<userTweets.length){
                maxHeap.push({
                    tweet:userTweets[nextIndex],
                    userId:top.userId,
                    index:nextIndex
                })
            }
        }

        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        if(!this.follows.has(followerId)){
            this.follows.set(followerId,new Set());
        }

        this.follows.get(followerId)!.add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        if(!this.follows.has(followerId)){
            this.follows.set(followerId,new Set());
        }

        this.follows.get(followerId)!.delete(followeeId);
    }
}
