class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n=temperatures.length;
        if(n===1) return [0];
        const res=new Array(n).fill(0);
        const st:number[][]=[];
        st.push([temperatures[0],0]);
        for(let i=1;i<n;i++){
            while(st.length>0 && temperatures[i]>st[st.length-1][0]){
                let ele=st.pop();
                res[ele[1]]=i-ele[1];
            }
            st.push([temperatures[i],i]);
        }

        return res;
    }
}
