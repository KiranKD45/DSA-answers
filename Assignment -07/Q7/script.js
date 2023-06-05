var backspaceCompare = function(s, t) {
    let stack1 = [];
    let stack2 = [];
    
    for(let i=0; i< Math.max(s.length, t.length); i++){
        s[i] === '#'? stack1.pop(): stack1.push(s[i]);
        t[i] === '#'? stack2.pop(): stack2.push(t[i]);
     };
    
    return stack1.join('') === stack2.join('');
};