class ListNode {
    int key;
    int value;
    ListNode prev;
    ListNode next;

    ListNode(int key, int value) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    int capacity;
    HashMap<Integer, ListNode> cache;
    ListNode head;
    ListNode tail;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap();
        this.head = new ListNode(0,0);
        this.tail=new ListNode(0,0);
        this.head.next=this.tail;
        this.tail.prev=this.head;
    }

    public int get(int key) {
        if (this.cache.containsKey(key)) {
            ListNode node = this.cache.get(key);
            this._remove(node);
            this._add(node);
            return node.value;
        }
        return -1;
    }

    public void put(int key, int value) {
        if(this.cache.containsKey(key)){
            ListNode node=this.cache.get(key);
            node.value=value;
            this._remove(node);
            this._add(node);
            this.cache.put(key,node);
        }
        else{
            ListNode node=new ListNode(key,value);
            this.cache.put(key,node);
            this._add(node);
            if(this.cache.size()>this.capacity){
                ListNode lru=this.tail.prev;
                this._remove(lru);
                this.cache.remove(lru.key);
            }
        }
    }

    private void _add(ListNode node){
        node.next=this.head.next;
        node.prev=this.head;
        this.head.next.prev=node;
        this.head.next=node;
    }

    private void _remove(ListNode node){
        node.prev.next=node.next;
        node.next.prev=node.prev;
    }

}
