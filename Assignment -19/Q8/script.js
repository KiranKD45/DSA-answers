var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a,b)=> a-b);
    nums2 = nums2.sort((a,b)=> a-b);
    let res = [];
    while(nums1.length && nums2.length){
        if(nums1[0]==nums2[0]){
            res.push(nums1[0]);
            nums1.splice(0,1);
            nums2.splice(0,1);
        }else if(nums1[0] <nums2[0]){
            nums1.splice(0,1);
        }else{
            nums2.splice(0,1);
        }
    };
    return res;
};