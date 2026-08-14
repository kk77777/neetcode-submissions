class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const n=piles.length;
        let l=1;
        let r=Math.max(...piles);
        let k=r;

        function canEatAllBananas(mid:number):boolean{
            let hrs=0;
            for(const pile of piles){
                hrs+=Math.floor(pile/mid);
                if(pile%mid!==0){
                    hrs++;
                }
            }

            return hrs<=h;
        }

        while(l<=r){
            let mid=l+Math.floor((r-l)/2);
            if(canEatAllBananas(mid)){
                k=Math.min(k,mid);
                r=mid-1;
            }
            else{
                l=mid+1;
            }
        }

        return k;
    }
}
