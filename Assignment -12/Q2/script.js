var hasCycle = function(N) {
    let set = new Set();
    while (N) {
        if (set.has(N)) return true;
        set.add(N);
        N = N.next;
    }
    return false;
};