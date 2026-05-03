class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let trimmed = ''
        for (let i = 0;i<s.length;i++) {
            let char =s[i].toLowerCase()
            if( (char>='a' && char<='z') || (char>='0' && char<='9')){
                trimmed+=char
            }
        }
        let p1 = 0
        let p2 = trimmed.length - 1
        while(p1 < p2) {
            if(trimmed[p1] != trimmed[p2]){
                return false
            }else{
                p1++
                p2--
            }
        }
        return true
    }
}
