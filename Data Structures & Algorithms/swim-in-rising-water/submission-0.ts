function isReachable(
    grid: number[][],
    vis: boolean[][],
    x: number,
    y: number,
    mid: number,
    n: number,
) {
    if (x < 0 || x >= n || y < 0 || y >= n || vis[x][y] || grid[x][y] > mid) {
        return false;
    }

    vis[x][y] = true;

    if (x == n - 1 && y == n - 1) {
        return true;
    }

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    for (const dir of dirs) {
        const [_x, _y] = [x + dir[0], y + dir[1]];
        if (isReachable(grid, vis, _x, _y, mid, n)) {
            return true;
        }
    }

    return false;
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    swimInWater(grid: number[][]): number {
        const n = grid.length;

        let l = grid[0][0],
            r = n * n - 1;
        let res = 0;

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);

            const vis = Array.from({ length: n }, () => Array(n).fill(false));
            if (isReachable(grid, vis, 0, 0, mid, n)) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return res;
    }
}
