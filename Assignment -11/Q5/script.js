var intersection = function(nums1, nums2) {

    const binarySearch = (arr, target) => {
        let left = 0
        let right = arr.length - 1
        while( left <= right ){
            let mid = Math.floor((left + right) / 2)
            if( arr[mid] === target ) return true
            if( target > arr[mid] ) left = mid + 1
            else right = mid - 1
        }
        return false
    }

    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)
    let ans = []

    for(let i=0; i<nums2.length; i++){
        if( binarySearch(nums1, nums2[i]) && ! binarySearch(ans, nums2[i]) ) ans.push(nums2[i])
    }

    return ans
};