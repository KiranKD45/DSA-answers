 function NFG(a, n, freq)
    {
        let s = [];
        s.push(0);
        let res = new Array(n);
        for (let i = 0; i < n; i++)
            res[i] = 0;
  
        for (let i = 1; i < n; i++)
        {
  
            if (freq[a[s[s.length - 1]]] > freq[a[i]])
                s.push(i);
            else
            {
  
                while (freq[a[s[s.length - 1]]]
                           < freq[a[i]]
                       && s.length > 0)
                {
                    res[s[s.length - 1]] = a[i];
                    s.pop();
                }
                s.push(i);
            }
        }
  
        while (s.length > 0)
        {
            res[s[s.length - 1]] = -1;
            s.pop();
        }
         document.write("[");
        for (let i = 0; i < n - 1; i++)
        {
            document.write(res[i] + ", ");
        }
        document.write(res[n - 1] + "]");
    }
     
    let a = [ 1, 1, 2, 3, 4, 2, 1 ];
    let len = 7;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < len; i++)
    {
      if (a[i] > max)
      {
        max = a[i];
      }
    }
    let freq = new Array(max + 1);
 
    for (let i = 0; i < max + 1; i++)
      freq[i] = 0;
    for (let i = 0; i < len; i++)
    {
      freq[a[i]]++;
    }
    NFG(a, len, freq);