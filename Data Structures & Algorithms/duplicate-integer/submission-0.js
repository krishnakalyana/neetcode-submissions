class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
  let map = new Map()
        for(let i = 0; i<nums.length; i++){
            if(map.has(nums[i])){
                console.log("in",map.has(i))
                return true
                map.set(nums[i],map.get(nums[i])+1)
            }else{
                map.set(nums[i],1)
            }
        }
        return false
    }
}
