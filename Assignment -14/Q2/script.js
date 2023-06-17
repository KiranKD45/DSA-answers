class Node
{
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
};
function newNode(data)
{
    var new_node = new Node();
    new_node.data = data;
    new_node.next = null;
    return new_node;
}
function reverse(head)
{
    var prev = null;
    var current = head;
    var next;
    while (current != null)
    {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
function addOneUtil(head)
{
    var res = head;
    var temp, prev = null;
 
    var carry = 1, sum;
 
    while (head != null)
    {
        sum = carry + head.data;
        carry = (sum >= 10)? 1 : 0;
        sum = sum % 10;
        head.data = sum;
        temp = head;
        head = head.next;
    }

    if (carry > 0)
        temp.next = newNode(carry);
    return res;
}
function addOne(head)
{
    head = reverse(head);
    head = addOneUtil(head);
    return reverse(head);
}
function printList(node)
{
    while (node != null)
    {
        document.write( node.data);
        node = node.next;
    }
    document.write("<br>");
}