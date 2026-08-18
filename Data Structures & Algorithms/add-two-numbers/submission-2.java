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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if (l1 == null && l2 == null)
            return null;
        if (l1 == null)
            return l2;
        if (l2 == null)
            return l1;

        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;

        int carry = 0;
        while (l1 != null || l2 != null) {
            // int val = l1.val + l2.val;
            // val += carry;
            // int sum = val % 10;
            // carry = val / 10;
            // ListNode node = new ListNode(sum);
            // curr.next = node;
            // curr = curr.next;
            // l1 = l1.next;
            // l2 = l2.next;
            int val=(l1!=null?l1.val:0)+(l2!=null?l2.val:0);
            val += carry;
            int sum = val % 10;
            carry = val / 10;
            ListNode node = new ListNode(sum);
            curr.next = node;
            curr = curr.next;
            if(l1!=null) l1=l1.next;
            if(l2!=null) l2=l2.next;
        }

        // while (l1 != null) {
        //     int val = l1.val;
        //     val += carry;
        //     int sum = val % 10;
        //     carry = val / 10;

        //     ListNode node = new ListNode(sum);
        //     curr.next = node;
        //     curr = curr.next;
        //     l1 = l1.next;
        // }

        // while (l2 != null) {
        //     int val = l2.val;
        //     val += carry;
        //     int sum = val % 10;
        //     carry = val / 10;

        //     ListNode node = new ListNode(sum);
        //     curr.next = node;
        //     curr = curr.next;
        //     l2 = l2.next;
        // }

        if (carry != 0) {
            curr.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
