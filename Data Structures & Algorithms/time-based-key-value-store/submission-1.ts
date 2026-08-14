type keyValue = [
    timestamp: number,
    value: string
];

class TimeMap {
    private keyStore: Map<string, keyValue[]>;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if(!this.keyStore.has(key)) return "";
        const values=this.keyStore.get(key);
        const n=values.length;
        let res="";
        let l=0,r=n-1
        while(l<=r){
            let mid=l+Math.floor((r-l)/2);
            if(values[mid][0]<=timestamp){
                res=values[mid][1];
                l=mid+1;
            }
            else{
                r=mid-1;
            }
        }

        return res;
    }
}
