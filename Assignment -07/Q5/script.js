var reverseStr = function(s, k) {

    let result = '';

    for(let i = 0; i<s.length; i += 2*k){
      let start  = i;
      let end = Math.min(i+k, s.length);
      let extractedChunk = s.substring(start, end)
      let reversedString = extractedChunk.split("").reverse().join("");
      result+=reversedString + s.substring(end, i+2*k)
    }

    return result
    
};