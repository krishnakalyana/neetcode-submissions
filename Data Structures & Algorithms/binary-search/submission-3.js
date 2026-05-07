class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let p1 = 0
        let p2 = nums.length-1
        while (p1<=p2){
        let middle = Math.floor( ( p1 + p2 ) / 2)
        if(target==nums[middle]) return middle
            if(target>nums[middle]){
                p1=middle+1
            }else{
                p2=middle-1
            }
        }
        return -1
    }
}
