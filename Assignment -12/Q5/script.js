var head;
 
     class Node
     {
            constructor(val)
            {
                this.data = val;
                this.next = null;
            }
        }

    function detectAndRemoveLoop(node) {
 
        if (node == null || node.next == null)
            return;
 
        var slow = node, fast = node;
 
        slow = slow.next;
        fast = fast.next.next;
 
        while (fast != null && fast.next != null) {
            if (slow == fast)
                break;
 
            slow = slow.next;
            fast = fast.next.next;
        }
 
        if (slow == fast) {
            slow = node;
            if (slow != fast) {
                while (slow.next != fast.next) {
                    slow = slow.next;
                    fast = fast.next;
                }
   
                fast.next = null; 
            }

            else {
                while (fast.next != slow) {
                    fast = fast.next;
                }
                fast.next = null;
            }
        }
    }

    function printList(node) {
        while (node != null) {
            console.log(node.data + " ");
            node = node.next;
        }
    }