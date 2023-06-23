function mergeArrays(arr1,  arr2 , n1 , n2,  arr3) {
    var i = 0, j = 0, k = 0;


    while (i < n1 && j < n2) {
      
        if (arr1[i] < arr2[j])
            arr3[k++] = arr1[i++];
        else
            arr3[k++] = arr2[j++];
    }

    while (i < n1)
        arr3[k++] = arr1[i++];
    while (j < n2)
        arr3[k++] = arr2[j++];
}

 
    var arr1 = [ 1, 3, 5, 7 ];
    var n1 = arr1.length;

    var arr2 = [ 2, 4, 6, 8 ];
    var n2 = arr2.length;

    var arr3 = Array(n1 + n2).fill(0);

    mergeArrays(arr1, arr2, n1, n2, arr3);

    document.write("Array after merging<br/>");
    for (i = 0; i < n1 + n2; i++)
        document.write(arr3[i] + " ");