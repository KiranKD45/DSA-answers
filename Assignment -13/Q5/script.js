class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
         
    }
}

function deleteLast(head, x)
{
    let temp = head;
    let prt = null;
     while (temp != null)
     {

         if (temp.data == x)
            ptr = temp;
        temp = temp.next;
     }

     if (ptr != null && ptr.next == null)
     {
         temp = head;
        while (temp.next != ptr)
        {
            temp = temp.next;
        }
        temp.next = null;
     }
     if (ptr != null && ptr.next != null)
     {
         ptr.data = ptr.next.data;
        temp = ptr.next;
        ptr.next = ptr.next.next;
          
     }
     return head;
      
}
function display(head)
{
    let temp = head
    if (head == null)
    {
        document.write("NULL<br>");
        return;
    }
    while (temp != null)
    {
        document.write( temp.data," --> ", end = "");
        temp = temp.next;
    }
    document.write("NULL<br>")
}