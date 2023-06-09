function printAP(a, d, n) 
{ 

    let curr_term; 
    curr_term=a; 
    for (let i = 1; i <= n; i++) 
    {   console.log((curr_term + " "));
        curr_term =curr_term + d; 
    
    } 
} 
// printAP(5,5,5)