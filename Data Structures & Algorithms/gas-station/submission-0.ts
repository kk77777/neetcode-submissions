class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        let totalTank=0;
        let currTank=0;
        let startStation=0;

        for(let i=0;i<gas.length;i++){
            const netGas=gas[i]-cost[i];
            totalTank+=netGas;
            currTank+=netGas;

            if(currTank<0){
                startStation=i+1;
                currTank=0;
            }
        }

        return totalTank>=0?startStation:-1;
    }
}
