class Node
    {
        constructor(item) {
           this.left = null;
           this.right = null;
           this.data = item;
        }
    }
     
    let max_level = 0;
     
    let root;
    function rightViewUtil(node, level) {
  
        if (node == null)
            return;
  
        if (max_level < level) {
            document.write(node.data + " ");
            max_level = level;
        }
  
        rightViewUtil(node.right, level + 1);
        rightViewUtil(node.left, level + 1);
    }
  
    function rightView()
    {
        rightview(root);
    }
  
    function rightview(node) {
  
        rightViewUtil(node, 1);
    }
     
    root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);
    root.right.left.right = new Node(8);
 
    rightView();
 