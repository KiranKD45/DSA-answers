var head;
var slow_ptr, fast_ptr, second_half;
 class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }

function isPalindrome(head) {
    slow_ptr = head;
    fast_ptr = head;
var prev_of_slow_ptr = head;
var midnode = null; 
    var res = true; 

    if (head != null && head.next != null) {
        
        while (fast_ptr != null && fast_ptr.next != null) {
            fast_ptr = fast_ptr.next.next;
            prev_of_slow_ptr = slow_ptr;
            slow_ptr = slow_ptr.next;
        }
        if (fast_ptr != null) {
            midnode = slow_ptr;
            slow_ptr = slow_ptr.next;
        }

       
        second_half = slow_ptr;
        prev_of_slow_ptr.next = null;
        reverse(); 
        res = compareLists(head, second_half); 
        reverse(); 

        if (midnode != null) {
            prev_of_slow_ptr.next = midnode;
            midnode.next = second_half;
        } else
            prev_of_slow_ptr.next = second_half;
    }
    return res;
}

function reverse() {
var prev = null;
var current = second_half;
var next;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    second_half = prev;
}
function compareLists(head1,  head2) {
var temp1 = head1;
var temp2 = head2;

    while (temp1 != null && temp2 != null) {
        if (temp1.data == temp2.data) {
            temp1 = temp1.next;
            temp2 = temp2.next;
        } else
            return false;
    }
    if (temp1 == null && temp2 == null)
        return true;
    return false;
}

 function push( new_data) {

var new_node = new Node(new_data);

    new_node.next = head;

    head = new_node;
}
function printList(ptr) {
    while (ptr != null) {
        console.log(ptr.data + "->");
        ptr = ptr.next;
    }
    console.log("NULL<br/>");
}