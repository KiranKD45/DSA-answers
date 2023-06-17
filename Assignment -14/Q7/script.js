var nextLargerNodes = function(head) {
    let temparr=[];
while(head){
    temparr.push(head.val);
    head=head.next
}
let res=new Uint32Array(temparr.length);
let stack=[];
for(let i=0;i<temparr.length;i++){
    while(stack.length>0&&temparr[stack[stack.length-1]]<temparr[i]){
        res[stack.pop()]=temparr[i]
    }
    stack.push(i);
}
return res;
};