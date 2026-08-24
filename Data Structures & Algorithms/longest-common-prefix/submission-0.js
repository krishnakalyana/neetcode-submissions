class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let com = ''
        for(let i =0 ;i<strs[0].length;i++){
            let charTo  = strs[0][i]
            let brk =  false
            for(let j=1;j<strs.length;j++){
                if(strs[j][i]!= charTo){
                    brk = true
                }
            }
            if(brk) break
            com+=charTo
        }
        return com
    }
}
