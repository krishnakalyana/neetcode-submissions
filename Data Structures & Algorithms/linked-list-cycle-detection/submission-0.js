/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slowPointer  = head
        let fastPointer = head

        while (fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next
            if(fastPointer == slowPointer){
                return true
            }
        }
        return false
    }
}
