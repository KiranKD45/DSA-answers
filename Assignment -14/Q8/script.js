var intersect = function(nums1, nums2) {
    var output=[]
    for(let i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            output.push(nums1[i])
            nums2.splice(nums2.indexOf(nums1[i]),1)
        }
    }
    return output;
};
  