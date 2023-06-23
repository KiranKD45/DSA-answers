var countSmaller = function(nums) {
    let n = nums.length, nums1 = [];
    for(let i = 0; i < n; i++) {
        nums1.push([i, nums[i]]);
        nums[i] = 0;
    }
    const merge = (low, mid, high) => {
        let tmp = [], i = low, j = mid + 1;
	
        for(let i = mid, j = high ; i >= low && j >= mid+1; ) {
            if(nums1[i][1] > nums1[j][1]) {
                nums[nums1[i][0]] += j - mid;
                i--;
            }
            else j--;
        }

        for( ; i <= mid && j <= high; ) {
            if(nums1[i][1] > nums1[j][1]) tmp.push(nums1[j++]);
            else tmp.push(nums1[i++]);
        }

        for( ; i <= mid; i++) tmp.push(nums1[i]);
        for( ; j <= high; j++) tmp.push(nums1[j]);
        for(let i = 0; i < tmp.length; i++, low++) nums1[low] = tmp[i];
    }
    const mergeSort = (low, high) => {
        if(low >= high) return;
        let mid = (low + high) >> 1;
        mergeSort(low, mid);
        mergeSort(mid + 1, high);
        merge(low, mid, high);
    }
    mergeSort(0, n-1);
    return nums;
};