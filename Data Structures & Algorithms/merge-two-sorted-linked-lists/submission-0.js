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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if( !list1 && !list2) return list1

        let newNode = new ListNode()
        let start = newNode 

        while ( list1 && list2 ) {
            if ( list1.val < list2.val ) {
                newNode.next = list1
                list1 = list1.next
            } else {
                newNode.next = list2
                list2 = list2.next
            }
            newNode = newNode.next
        }
        newNode.next = list1 || list2
        return start.next
    }
}
