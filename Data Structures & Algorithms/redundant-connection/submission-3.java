class DSU {
    private int[] parent;
    private int[] size;

    DSU(int n) {
        parent = new int[n + 1];
        size = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            parent[i] = i;
            size[i] = 0;
        }
    }

    private int find(int x) {
        if (x == parent[x]) {
            return x;
        }

        return parent[x] = find(parent[x]);
    }

    private void union(int x, int y) {
        int parentX = find(x);
        int parentY = find(y);

        if (parentX == parentY) {
            return;
        }

        if (size[parentX] >= size[parentY]) {
            parent[parentY] = parentX;
            size[parentX] += size[parentY];
        } else {
            parent[parentX] = parentY;
            size[parentY] += size[parentX];
        }
    }
}

class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        DSU dsu = new DSU(n);
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];

            if (dsu.find(u) == dsu.find(v)) {
                return edge;
            }

            dsu.union(u, v);
        }
        return new int[0];
    }
}
