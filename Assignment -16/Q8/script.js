function leftSmaller(arr,n,SE)
    {

        let S=[]
        for (let i = 0; i < n; i++)
        {

            while (S.length!=0 && S[S.length-1] >= arr[i])
            {
                S.pop();
            }
            if (S.length!=0)
            {
                SE[i] = S[S.length-1];
            }
            else
            {
                SE[i] = 0;
            }
   
            S.push(arr[i]);
        }
         
    }
     
    function findMaxDiff(arr,n)
    {

        let LS = new Array(n);
        for(let i=0;i<n;i++)
        {
            LS[i]=0;
        }
 
        leftSmaller(arr, n, LS);
   
       
        let RRS = new Array(n); 
        for(let i=0;i<n;i++)
        {
            RRS[i]=0;
        }
           

        reverse(arr);
        leftSmaller(arr, n, RRS);
   
    
        let result = -1;
        for (let i = 0; i < n; i++)
        {
            result = Math.max(result, Math.abs(LS[i] - RRS[n - 1 - i]));
        }
   
        return result;
    }
     
    function reverse(a)
    {
        let i, k, n = a.length;
        let t;
        for (i = 0; i < Math.floor(n / 2); i++)
        {
            t = a[i];
            a[i] = a[n - i - 1];
            a[n - i - 1] = t;
        }
    }