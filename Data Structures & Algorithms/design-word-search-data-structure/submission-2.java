class TrieNode{
    private TrieNode[] children;
    private boolean isLastNode;

    TrieNode(){
        this.children=new TrieNode[26];
        this.isLastNode=false;
    }
}

class WordDictionary {

    private final TrieNode root;

    public WordDictionary() {
        this.root=new TrieNode();
    }

    private boolean dfs(TrieNode node, String word, int index){
        if(index==word.length()){
            return node.isLastNode;
        }

        char ch=word.charAt(index);

        if(ch=='.'){
            for(int i=0;i<26;i++){
                if(node.children[i]!=null && dfs(node.children[i],word,index+1)){
                    return true;
                }
            }
            return false;
        }else{
            int i=ch-'a';
            if(node.children[i]==null){
                return false;
            }
            
            return dfs(node.children[i],word,index+1);
        }

    }

    public void addWord(String word) {
        TrieNode crawler=root;

        for(char ch:word.toCharArray()){
            int index=ch-'a';
            if(crawler.children[index]==null){
                crawler.children[index]=new TrieNode();
            }
            crawler=crawler.children[index];
        }
        crawler.isLastNode=true;
    }

    public boolean search(String word) {
        return dfs(root,word,0);
    }
}
