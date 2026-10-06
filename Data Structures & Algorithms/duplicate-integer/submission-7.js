class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map ={}
        let n = nums.length 
        for(let i=0;i<n;i++){
            if(map[nums[i]]){
                return true
            }
            map[nums[i]]=1
        }
        return false
    }
}
