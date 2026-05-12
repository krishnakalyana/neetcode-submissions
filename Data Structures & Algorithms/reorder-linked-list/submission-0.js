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
     * @return {void}
     */
    reorderList(head) {
        if ( !head || !head.next ) return head

        let slow = head
        let fast = head

        while ( fast && fast.next ) {
            slow = slow.next
            fast = fast.next.next
        }
        // reverse second half
        let prev = null
        let cur = slow.next
        slow.next = null

        while (cur) {
            let temp = cur.next
            cur.next = prev
            prev=cur
            cur=temp
        }
        // prev = second half head pointer
        let first = head
        while (prev) {
            let firstTemp = first.next
            let secondTemp = prev.next

            first.next = prev
            prev.next = firstTemp

            prev = secondTemp
            first = firstTemp
        }
        return head
    }
}
