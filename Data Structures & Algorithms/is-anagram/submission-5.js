class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        let arr = Array(26).fill(0);
        let arrt = Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            let pl = s[i].charCodeAt() - 97;
            arr[pl] = ++arr[pl];
            let pl1 = t[i].charCodeAt() - 97;
            arrt[pl1] = ++arrt[pl1];
        }

        for (let i = 0; i < 26; i++) {
            if (arr[i] != arrt[i]) {
                return false;
            }
        }
        return true;
    }
}
