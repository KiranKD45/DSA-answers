
function isPower_of_Three(n)
{
    if (n <= 0)
        return false;
    if (n % 3 == 0)
        return isPower_of_Three(n / 3);
    if (n == 1)
        return true;
    return false;
}
