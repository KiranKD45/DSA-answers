var head;
 
     class Node {
            constructor(val) {
                this.data = val;
                this.prev = null;
                this.next = null;
            }
        }
    function reverse() {
var temp = null;
var current = head;
        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
 
        if (temp != null) {
            head = temp.prev;
        }
    }
    function push(new_data) {
 
var new_node = new Node(new_data);
        new_node.prev = null;
        new_node.next = head;
        if (head != null) {
            head.prev = new_node;
        }
        head = new_node;
    }
 
    function printList(node) {
        while (node != null) {
            document.write(node.data + " ");
            node = node.next;
        }
    }