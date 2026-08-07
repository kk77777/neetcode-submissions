class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const n=numbers.length;
        let i=0,j=n-1;
        while(i<n && j>=0){
            if(numbers[i]+numbers[j]===target){
                return [i+1,j+1];
            }
            else if(numbers[i]+numbers[j]>target){
                j--;
            }
            else{
                i++;
            }
        }

        return [i+1,j+1];
    }
}
