// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null
       let map = new Map()
       let cur = head

       while(cur){
        map.set(cur,new Node(cur.val))
        cur = cur.next
       }

       let newCur =  head
       while (newCur) {
        let pointer =  map.get(newCur)
        pointer.next =  map.get(newCur.next) || null
        pointer.random =  map.get(newCur.random) || null
        newCur = newCur.next
       }
       return map.get(head)
    }
}
