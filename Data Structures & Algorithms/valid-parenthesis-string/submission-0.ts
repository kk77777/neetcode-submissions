class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s: string): boolean {
        let minOpen=0;
        let maxOpen=0;

        for(const c of s){
            if(c==='('){
                minOpen++;
                maxOpen++;
            }
            else if(c===')'){
                minOpen--;
                maxOpen--;
            }
            else{
                minOpen--;
                maxOpen++;
            }

            if(maxOpen<0) return false;

            if(minOpen<0) minOpen=0;
        }

        return minOpen===0;
    }
}
