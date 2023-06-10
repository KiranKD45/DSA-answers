function checkEquality(s)
{
    return (s.charAt(0) == s.charAt(s.length - 1));
}
function countSubstringWithEqualEnds(s)
{
    var result = 0;
    var n = s.length;
    for (var i = 0; i < n; i++)
       for (var len = 1; len <= n-i; len++)
          if (checkEquality(s.substring(i, i + len)))
            result++;
    return result;
}