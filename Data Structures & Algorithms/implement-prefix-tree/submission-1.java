class TrieNode {
    TrieNode[] children;
    boolean isLastNode;

    TrieNode() {
        this.children = new TrieNode[26];
        this.isLastNode = false;
    }
}

class PrefixTree {
    private final TrieNode root;

    public PrefixTree() {
        this.root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode crawler = this.root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (crawler.children[index] == null) {
                crawler.children[index] = new TrieNode();
            }
            crawler = crawler.children[index];
        }
        crawler.isLastNode = true;
    }

    public boolean search(String word) {
        TrieNode crawler = this.root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (crawler.children[index] == null) {
                return false;
            }
            crawler = crawler.children[index];
        }
        return crawler.isLastNode;
    }

    public boolean startsWith(String prefix) {
        TrieNode crawler = this.root;
        for (char ch : prefix.toCharArray()) {
            int index = ch - 'a';
            if (crawler.children[index] == null) {
                return false;
            }
            crawler = crawler.children[index];
        }
        return true;
    }
}
