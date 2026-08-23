class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length
        let ans = Array(2*n)
        for(let i =0;i<n*2;i++){
            let pl =  i%n
            ans[i] = nums[pl] 
        }
        return ans
    }
}
