class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}
    function push(head_ref , new_data) {

var new_node = new Node();
        new_node.data = new_data;
        new_node.next = (head_ref);
        (head_ref) = new_node;
        return head_ref;
    }
    function printList(head) {
var temp = head;
        while (temp != null) {
            console.log(temp.data+" ");
            temp = temp.next;
        }
        document.write("<br/>");
    }
    function skipMdeleteN(head , M , N) {
var curr = head, t;
        var count;
        while (curr != null) {
            for (count = 1; count < M && curr != null; 
            count++)
                curr = curr.next;
            if (curr == null)
                return;
            t = curr.next;
            for (count = 1; count <= N && t != null; 
            count++)
            {
        var temp = t;
                t = t.next;
            }
            curr.next = t;
            curr = t;
        }
    }