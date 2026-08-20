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

    private ListNode mergeTwoList(ListNode l1, ListNode l2){
        if(l1==null) return l2;
        if(l2==null) return l1;
        if(l1.val<l2.val){
            l1.next=mergeTwoList(l1.next,l2);
            return l1;
        }
        else{
            l2.next=mergeTwoList(l1,l2.next);
            return l2;
        }
    }

    private ListNode partitionAndMerge(int s, int e, ListNode[] lists) {
        if(s==e) return lists[s];
        if(s>e) return null;
        int mid=s+(e-s)/2;
        ListNode l1=partitionAndMerge(s,mid,lists);
        ListNode l2=partitionAndMerge(mid+1,e,lists);
        return this.mergeTwoList(l1,l2);
    }

    public ListNode mergeKLists(ListNode[] lists) {
        int n = lists.length;
        if (n == 0)
            return null;
        return this.partitionAndMerge(0, n - 1, lists);
    }
}
