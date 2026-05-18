class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) {
        let n = t.length
        let stack = []
        let res = Array(n).fill(0)
        stack.push(n-1)

        for ( let i = n-2; i >=0; i-- ) {
            while ( stack.length ) {
                let top = stack[ stack.length-1 ]
                if ( t[i] <t[top] ){
                    let diff = top - i
                    res[i] = diff
                    break;
                } else{ 
                    stack.pop()
                }
            }
            stack.push(i)
        }
        return res
    }
}
