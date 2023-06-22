var firstUniqChar = function(s) {
    let queue =[]
  let map = new Map();
  let ans 
  for(let i=0;i<s.length;i++){
    if(map.has(s[i])){
      map.set(s[i],'r')
      if(queue.length>0 && queue[queue.length-1]==s[i]){
        queue.pop()
      }
    }else{
      map.set(s[i],i)
      queue.unshift(s[i])
    }
  }
  while(queue.length){
    res=queue.pop()
    if(map.get(res)!=='r'){
      return map.get(res)
    }
  }
  return -1
};
Previous
