function findAnagrams(s, p) {
    const result = [];
    const charCount = new Array(26).fill(0);
    let left = 0;
    let right = 0;
  
    for (let i = 0; i < p.length; i++) {
      charCount[p.charCodeAt(i) - 97]++;
    }
  
    while (right < s.length) {
      charCount[s.charCodeAt(right) - 97]--;
  
      if (right - left + 1 > p.length) {
        charCount[s.charCodeAt(left) - 97]++;
        left++;
      }
  
      if (right - left + 1 === p.length && charCount.every(count => count === 0)) {
        result.push(left);
      }
  
      right++;
    }
  
    return result;
}