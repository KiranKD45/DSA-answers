var removeNthFromEnd = function(head, n) {
    if (head === null) {
        return head;
    }
    
    let ptr = head;
    let count = 0;
    while (ptr !== null) {
        count++;
        ptr = ptr.next;
    }
    
    if (count === n) {
        head = head.next;
        return head;
    }
    
    ptr = head;
    n = count - n - 1;
    count = 0;
    while (ptr !== null) {
        if (count === n) {
            ptr.next = ptr.next.next;
        }
        count++;
        ptr = ptr.next;
    }
    
    return head;
};