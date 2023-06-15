class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
    function insert( root , item) {
        var ptr, temp;
        temp = new Node();
        temp.data = item;
        temp.next = null;
 
        if (root == null)
            root = temp;
        else {
            ptr = root;
            while (ptr.next != null)
                ptr = ptr.next;
 
            ptr.next = temp;
        }
        return root;
    }

    function newList( root1,  root2) {
        var ptr1 = root1, ptr2 = root2, ptr;
        var root = null, temp;
 
        while (ptr1 != null) {
            temp = new Node();
            temp.next = null;
 
            if (ptr1.data < ptr2.data)
                temp.data = ptr2.data;
            else
                temp.data = ptr1.data;
 
            if (root == null)
                root = temp;
            else {
                ptr = root;
                while (ptr.next != null)
                    ptr = ptr.next;
 
                ptr.next = temp;
            }
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }
        return root;
    }
 
    function display( root) {
        while (root != null) {
            document.write(root.data + "->");
            root = root.next;
        }
        document.write("<br/>");
    }
