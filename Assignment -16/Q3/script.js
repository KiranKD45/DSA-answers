let st = [];
st.push('1');
st.push('2');
st.push('3');
st.push('4');
st.push('5');
st.push('6');
st.push('7');
 
let v = [];
 
while(st.length > 0){
    v.push(st[0]);
    st.shift();
}
     
let n = v.length;
 
if(n%2==0){
    let target = Math.floor(n/2);
    for(let i = 0; i < n; i++){
        if(i==target){
            continue;
        }
       st.push(v[i]);
    }
}
else{
    let target = Math.floor(n/2);
    for(let i = 0; i < n; i++){
        if(i==target){
            continue;
        }   
        st.push(v[i]);
    }
}
 
console.log("Printing stack after deletion of middle: ");
 
while (st.length > 0){
    let p = st[0];
    st.shift();
    console.log(p + " ");
}