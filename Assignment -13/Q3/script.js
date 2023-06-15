var head;
     class Node {
            constructor(val) {
                this.data = val;
                this.next = null;
            }
        }
  
    function reverse(head , k) {
        if (head == null)
            return null;
        var current = head;
        var next = null;
        var prev = null;
  
        var count = 0;
        while (count < k && current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }
  
        if (next != null)
            head.next = reverse(next, k);
  
        return prev;
    }
    function push(new_data) {
        new_node = new Node(new_data);
        new_node.next = head;
        head = new_node;
    }

    function printList() {
        temp = head;
        while (temp != null) {
            document.write(temp.data + " ");
            temp = temp.next;
        }
        document.write("<br/>");
    }