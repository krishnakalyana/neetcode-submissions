class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length<=1) return false
        let map = {
            '}':'{',
            ')':'(',
            ']':'['
        }
        let stack =[]
        for ( let i=0 ; i<s.length; i++ ) {
            if(Object.hasOwn(map,s[i])){
                if(stack[stack.length-1]==map[s[i]]){
                    stack.pop()
                }else{
                    return false
                }
            }else{
                stack.push(s[i])
            }
        } 
       
        if(!stack.length){
            return true
        }
        return false
    }
}
