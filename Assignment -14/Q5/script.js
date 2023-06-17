var oddEvenList = function(head) {
    
    if (!head || !head.next) return head;
  
    let odd = head, even = head.next, firstEven = even;
    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
    odd.next = firstEven;
    return head;
  
  };