class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        const adj = new Map<string, Set<string>>();
        const inDegree = new Map<string, number>();

        for (const word of words) {
            for (const char of word) {
                if (!adj.has(char)) {
                    adj.set(char, new Set());
                    inDegree.set(char, 0);
                }
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];
            const ml = Math.min(w1.length, w2.length);

            if (w1.length > w2.length && w1.startsWith(w2)) {
                return "";
            }

            for (let j = 0; j < ml; j++) {
                if (w1[j] !== w2[j]) {
                    const parent = w1[j];
                    const child = w2[j];

                    if (!adj.get(parent)!.has(child)) {
                        adj.get(parent)!.add(child);
                        inDegree.set(child,(inDegree.get(child)||0)+1);
                    }
                    break;
                }
            }
        }


        const queue:string[]=[];
        for(const [char,degree] of inDegree.entries()){
            if(degree==0){
                queue.push(char);
            }
        }

        const res:string[]=[];

        while(queue.length>0){
            const curr=queue.shift();
            res.push(curr);
            const neighbours=adj.get(curr);
            if(neighbours){
                for(const neighbour of neighbours){
                    inDegree.set(neighbour,inDegree.get(neighbour)-1);
                    if(inDegree.get(neighbour)==0){
                        queue.push(neighbour);
                    }
                }
            }
        }

        if(res.length!==adj.size){
            return "";
        }

        return res.join("");
    }


}
