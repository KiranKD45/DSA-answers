class Node
    {
        constructor(d) {
            this.data = d;
            this.next = null;
          }
    }
     
    let head=new Node();
    function removeDuplicates()
    {
        let curr = head;
        while (curr != null) {
             let temp = curr;

            while(temp!=null && temp.data==curr.data) {
                temp = temp.next;
            }
            curr.next = temp;
            curr = curr.next;
        }
    }
    function push(new_data)
    {

        let new_node = new Node(new_data);

        new_node.next = head;

        head = new_node;
    }

    function printList()
    {
        let temp = head;
         while (temp != null && temp.data)
         {
              
            document.write(temp.data+" ");
            temp = temp.next;
         }
         document.write("<br>");
    }