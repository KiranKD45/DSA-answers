class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}
  
function countOfNodes(head)
{
    let count = 0;
    while (head != null) {
        head = head.next;
        count+=1;
    }
    return count;
}

function deleteMid(head)
{
 
    if (head == null)
        return null;
    if (head.next == null) {
        return null;
    }
    var copyHead = head;
    var count = countOfNodes(head);
    var mid = parseInt(count / 2);

    while (mid-- > 1) {
        head = head.next;
    }
    head.next = head.next.next;

    return copyHead;
}

function printList( ptr) {
    while (ptr != null) {
        document.write(ptr.data + "->");
        ptr = ptr.next;
    }
    document.write("NULL<br/>");
}

function newNode(data) {
     temp = new Node();
    temp.data = data;
    temp.next = null;
    return temp;
}