var minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length;
    if (m < n) [word1, word2, m, n] = [word2, word1, n, m];
    let wordArr1 = word1.split(""), wordArr2 = word2.split("");
    let dpLast = new Uint16Array(n+1);
    let dpCurr = new Uint16Array(n+1);

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            dpCurr[j+1] = wordArr1[i] === wordArr2[j] ? dpLast[j]+1 : Math.max(dpCurr[j], dpLast[j+1]);
        }
        [dpLast, dpCurr] = [dpCurr, dpLast];
    }
    return m + n - 2 * dpLast[n];
};