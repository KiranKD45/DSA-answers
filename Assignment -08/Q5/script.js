var compress = function(chars) {
    if(!chars.length) return 0;
    let curr = chars[0];
    let cnt = 0;
    let idx = 0;
     for(let i = 0; i <= chars.length; ++i) {
         if(curr === chars[i]) {
             cnt++;
         } else {
             chars[idx] = curr;
             if(cnt > 1) {
                 const ch = cnt.toString();
                 for(let j = 0; j < ch.length; ++j) chars[++idx] = ch[j];
             }
         idx++;
         curr = chars[i];
         cnt = 1;
         }
     }
     return idx;
    };