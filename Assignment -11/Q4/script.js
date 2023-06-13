var findDuplicate = function(nums) {
    
    if(nums.length === 0 || nums === null) return 0;
    
    let left = 1;
    let right = nums.length -1;
    
    while(left < right){
        
        const mid = Math.floor(left + (right-left)/2);
        
        let count = 0;
        
        for(let i=0; i < nums.length; i++){
            if(nums[i] <= mid) count++
        }
        
        
        if(count > mid){
            right = mid;
        }else{
            left = mid +1;
        }
        
        count = 0;
    }
    
    return left
};
