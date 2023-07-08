class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

var root;
   
var head;

var prev = null;


function BinaryTree2DoubleLinkedList(root) 
{
  
    if (root == null)
        return;

    BinaryTree2DoubleLinkedList(root.left);

    if (prev == null) 
        head = root;
    else
    {
        root.left = prev;
        prev.right = root;
    }
    prev = root;

    BinaryTree2DoubleLinkedList(root.right);
}

function printList(node)
{
    while (node != null) 
    {
        document.write(node.data + " ");
        node = node.right;
    }
}
