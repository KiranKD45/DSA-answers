function powerSet(str,index,curr)
    {
        let n = str.length;
  
    if (index == n)
    {
        console.log(curr+"<br>");
        return;
    }
    powerSet(str, index + 1, curr + str[index]);
    powerSet(str, index + 1, curr);
    }
    // let str = "abc";
    // let index = 0;
    // let curr="";
    // powerSet(str,index,curr);