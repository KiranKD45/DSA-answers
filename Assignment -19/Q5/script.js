function rightrotate(arr , n , outofplace , cur) {
    var tmp = arr[cur];
    for (i = cur; i > outofplace; i--)
        arr[i] = arr[i - 1];
    arr[outofplace] = tmp;
}

function rearrange(arr , n) {
    var outofplace = -1;

    for (var index = 0; index < n; index++)
    {
        if (outofplace >= 0)
        {
         

            if (((arr[index] >= 0) && (arr[outofplace] < 0)) || ((arr[index] < 0) && (arr[outofplace] >= 0))) {
                rightrotate(arr, n, outofplace, index);


                if (index - outofplace >= 2)
                    outofplace = outofplace + 2;
                else
                    outofplace = -1;
            }
        }

        if (outofplace == -1) {
        
            if (((arr[index] >= 0) && ((index & 0x01) == 0)) || ((arr[index] < 0) && (index & 0x01) == 1))
                outofplace = index;
        }
    }
}
function printArray(arr , n) {
    for (i = 0; i < n; i++)
        document.write(arr[i] + " ");
    document.write("");
}