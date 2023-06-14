class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

    function isCircular( head) {

        if (head == null)
            return true;
         node = head.next;
  

        while (node != null && node != head)
            node = node.next;
        return (node == head);
    }

    function newNode(data) {
         temp = new Node();
        temp.data = data;
        temp.next = null;
        return temp;
    }