class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand: number[], groupSize: number): boolean {
        const n=hand.length;
        if(n%groupSize!==0) return false;

        const mp=new Map<number,number>();

        for(const card of hand){
            mp.set(card,(mp.get(card)||0)+1);
        }

        const sortedCards=Array.from(mp.keys()).sort((a,b)=>a-b);

        for(const card of sortedCards){
            const count=mp.get(card)||0;
            if(count>0){
                for(let i=0;i<groupSize;i++){
                    const nextCard=card+i;
                    const currentCount=mp.get(nextCard)||0;

                    if(currentCount<count){
                        return false;
                    }

                    mp.set(nextCard,currentCount-count);
                }
            }
        }

        return true;
    }
}
