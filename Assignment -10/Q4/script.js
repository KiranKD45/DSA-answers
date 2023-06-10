function recLen(str)
{
    if (str == "")
        return 0;
    else
        return recLen(str.substring(1)) + 1;
}