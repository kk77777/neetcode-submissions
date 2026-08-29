class Solution {
    record Task(int freq, int availableAt) {}
    ;

    public int leastInterval(char[] tasks, int n) {
        HashMap<Character, Integer> freq = new HashMap<>();

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());

        for (char task : tasks) {
            freq.put(task, freq.getOrDefault(task, 0) + 1);
        }

        for (int count : freq.values()) {
            maxHeap.add(count);
        }

        Queue<Task> q = new ArrayDeque<>();

        int time = 0;

        while (maxHeap.size() > 0 || q.size() > 0) {
            time++;
            if (maxHeap.size() > 0) {
                int cnt = maxHeap.poll() - 1;
                if (cnt > 0) {
                    q.offer(new Task(cnt, time + n));
                }
            }

            if(q.size()>0 && q.peek().availableAt()==time){
                int readyCnt=q.poll().freq();
                maxHeap.add(readyCnt);
            }
        }

        return time;
    }
}
