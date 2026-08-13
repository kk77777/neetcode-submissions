class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const m=matrix.length;
        const n=matrix[0].length;
        let l=0,r=m*n-1;


        while(l<=r){
            const mid=l+Math.floor((r-l)/2);
            const rowIndex=Math.floor(mid/n);
            const colIndex=Math.floor(mid%n);
            if(matrix[rowIndex][colIndex]===target) return true;
            else if(matrix[rowIndex][colIndex]<target){
                l++;
            }
            else{
                r--;
            }
        }

        return false;
    }
}
