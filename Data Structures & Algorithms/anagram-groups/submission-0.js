class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let map = {}
      for ( let i =0; i<strs.length; i++ ) {
        let s = strs[i]
        let freq = Array(26).fill(0)
        for ( let j =0; j <s.length; j++ ) {
           let index = s[j].charCodeAt(0) - 'a'.charCodeAt(0)
           freq[index]++ 
        }
        let key = ''

        for ( let k =0; k < freq.length; k++ ) {
            key=key+'#'+freq[k]
        }
        if(!map[key]){
            map[key] =[s]
        }else{
            map[key].push(s)
        }
      }  
      return Object.values(map)
    }
}
