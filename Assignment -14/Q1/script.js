class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Solution {
    removeLoop(head)
    {
        let fast = head.next;
        let slow = head;
        
        while( fast !== slow )
        {
            if( fast === null || fast.next === null ) 
            return;
            
            fast = fast.next.next;
            slow = slow.next;
        }
        let size = 1;
        fast = fast.next;
        while( fast !== slow )
        {
            fast = fast.next;
            size++;
        }
        slow = head;
        fast = head;
        for(let i=0; i<size-1; i++)
            fast = fast.next;
            
        while( fast.next != slow )
        {
            fast = fast.next;
            slow = slow.next;
        }
        fast.next = null;
    }
    
}