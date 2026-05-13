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
        if (!head || !head.next) return head;
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let prev = null;
        let cur = slow.next;
        slow.next = null;

        while (cur) {
            let temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
        }

        let first = head;
        let sec = prev;
        while (sec) {
            let tempSecNext = sec.next;
            let tempFirstNext = first.next;

            first.next = sec;

            sec.next = tempFirstNext;

            sec = tempSecNext;
            first = tempFirstNext;
        }
    }
}
