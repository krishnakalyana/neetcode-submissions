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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode()
        dummy.next = head
        let prev = dummy
        let next = dummy

        for ( let i =0 ; i<n+1 ;i++ ) {
            next = next.next
        }
        
        while(next){
            prev = prev.next
            next= next.next
        }
        prev.next = prev.next.next
        return dummy.next
    }
}
