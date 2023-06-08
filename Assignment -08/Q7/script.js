var decodeString = function(s) {

    let stack = [], currNum = 0, currStr = ''
  
    for(var i=0; i<s.length; i++) {
  
        if(s[i] == '[') {
            stack.push(currNum)
            stack.push(currStr)
            currStr = ''
            currNum = 0
        }
        else if(s[i] == ']') {
            prevStr = stack.pop()
            prevNum = stack.pop()
            currStr = prevStr + currStr.repeat(prevNum)
        }
        else if(s[i] >= 0 && s[i] <= 9) {
            currNum = currNum*10 + Number(s[i])
        }
        else {
            currStr += s[i]
        }
    }
    return currStr 
  
  };