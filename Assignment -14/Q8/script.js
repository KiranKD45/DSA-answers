var removeZeroSumSublists = function(head) {
    if (!head) {
        return head;
    }
    let dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy 
    let prefixSumMap = new Map(); 
    let runningSum = 0; 
    
    while (curr) {
        runningSum += curr.val;
        prefixSumMap.set(runningSum, curr);
        curr = curr.next;
    }
    
    curr = dummy;
    runningSum = 0;
    
    while (curr) {
        runningSum += curr.val; 
        curr.next = prefixSumMap.get(runningSum).next;
        curr = curr.next; 
    }
    
    return dummy.next;
};