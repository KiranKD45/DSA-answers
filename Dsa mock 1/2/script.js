var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++){
     if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
         return s.indexOf(s[i])
     }
 }
 return -1;
};

//T.C O(n)
//S.C O(1)