function removeConsecutiveSame(v)
{
    let n = v.length;
 
    for (let i = 0; i < n - 1;)
    {
     
        if (v[i] == (v[i + 1]))
        {
         

            v.splice(i, 1);
            v.splice(i, 1);
            if (i > 0) {
                i--;
            }
            n = n - 2;
        }
        else {
            i++;
        }
    }
    return v.length;
}