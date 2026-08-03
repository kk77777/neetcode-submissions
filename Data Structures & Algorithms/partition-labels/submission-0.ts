class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S: string): number[] {
        const n=S.length;

        const lastIndex=new Map<string,number>();

        for(let i=0;i<n;i++){
            lastIndex.set(S[i],i);
        }

        const res:number[]=[];
        let start=0;
        let end=0;

        for(let i=0;i<n;i++){
            end=Math.max(end,lastIndex.get(S[i]));

            if(i===end){
                res.push(end-start+1);
                start=i+1;
            }
        }

        return res;
    }
}
