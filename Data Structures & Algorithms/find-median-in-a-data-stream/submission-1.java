class MedianFinder {

    PriorityQueue<Integer>small;
    PriorityQueue<Integer>large;

    public MedianFinder() {
        small=new PriorityQueue<>(Comparator.reverseOrder());
        large=new PriorityQueue<>();
    }
    
    public void addNum(int num) {
        small.add(num);
        if(small.size()>0 && large.size()>0 && small.peek()>large.peek()){
            int val=small.poll();
            large.add(val);
        }
        if(small.size()-large.size()>1){
            int val=small.poll();
            large.add(val);
        }else if(large.size()-small.size()>1){
            int val=large.poll();
            small.add(val);
        }
    }
    
    public double findMedian() {
        if(small.size()>large.size()) return small.peek();
        else if(large.size()>small.size()) return large.peek();
        return (double)(small.peek()+large.peek())/2;
    }
}
