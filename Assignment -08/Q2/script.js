var checkValidString = function(s, count = 0) {
    for (let i = 0; i < s.length; i++) {
      if (count < 0) {
        return false;
      }
      
      const char = s[i];
  
      if (char === '(') {
        count++;
        continue;
      }
      
      if (char === ')') {
        count--;
        continue;
      }
      
      const next = s.slice(i + 1);
      
      return checkValidString(next, count)
        || checkValidString(next, count + 1)
        || checkValidString(next, count - 1);
    }
    
    return count === 0;
  };