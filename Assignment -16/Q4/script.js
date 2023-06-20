let q = [];
function checkSorted(n)
{
    let st = [];
    let expected = 1;
    let fnt;
    while (q.length != 0)
    {
        fnt = q[0];
        q.shift();
        if (fnt == expected)
            expected++;
  
        else
        {
            if (st.length == 0)
            {
                st.push(fnt);
            }
            else if (st.length != 0 &&
                     st[st.length - 1] < fnt)
            {
                return false;
            }

            else
                st.push(fnt);
        }

        while (st.length != 0 &&
               st[st.length - 1] == expected)
        {
            st.pop();
            expected++;
        }
    }
    if ((expected - 1) == n && st.length == 0)
        return true;
  
    return false;
}
 
q.push(5);
q.push(1);
q.push(2);
q.push(3);
q.push(4);

let n = q.length;

if (checkSorted(n))
  document.write("Yes");
else
  document.write("No");