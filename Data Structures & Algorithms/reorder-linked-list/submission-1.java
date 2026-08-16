/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public void reorderList(ListNode head) {
        ListNode slow=head,fast=slow;

        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }

        ListNode prev=null,curr=slow,nxt=null;
        while(curr!=null){
            nxt=curr.next;
            curr.next=prev;
            prev=curr;
            curr=nxt;
        }

        ListNode first=head,second=prev;
        while(second.next!=null){
            ListNode t1=first.next;
            ListNode t2=second.next;
            first.next=second;
            second.next=t1;
            first=t1;
            second=t2;
        }

    }
}
