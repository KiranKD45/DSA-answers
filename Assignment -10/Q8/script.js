function isConsonant(ch)
{
    ch = ch.toUpperCase();
    return (!(ch == 'A' || ch == 'E' ||
              ch == 'I' || ch == 'O' ||
              ch == 'U') && ch.charCodeAt(0) >= 65 && 
                            ch.charCodeAt(0) <= 90) ;
}

function totalConsonants(str, n)
{
    if (n == 1)
        return isConsonant(str[0]);
  
    return totalConsonants(str, n - 1) + 
                isConsonant(str[n - 1]);
}
  