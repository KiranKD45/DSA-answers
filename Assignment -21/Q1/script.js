class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }
     
    let index = 0;
     
    function newNode(data)
    {
        let temp = new Node(data);
        return temp;
    }
  
    function printInorder(node)
    {
        if (node == null)
            return;
  
        printInorder(node.left);
  
        document.write(node.data + " ");
  

        printInorder(node.right);
    }
     
    function arrayToBST(arr, root)
    {
        if (root == null)
            return;
  
        arrayToBST(arr, root.left);
  
        root.data = arr[index];
        index++;

        arrayToBST(arr, root.right);
    }
    
    function storeInorder(node, inorder)
    {
     
        if (node == null)
            return inorder;
  
        storeInorder(node.left, inorder);
  
        inorder[index] = node.data;
        index++;
        storeInorder(node.right, inorder);
    }
     

    function countNodes(root)
    {
        if (root == null)
            return 0;
        return countNodes(root.left) + countNodes(root.right) + 1;
    }
  
    function binaryTreeToBST(root)
    {

        if (root == null)
            return;
  
        let n = countNodes(root);

        let arr = new Array(n);
        arr.fill(0);
  
        storeInorder(root, arr);

        arr.sort(function(a, b){return a - b});

        index = 0;
        arrayToBST(arr, root);
    }
     
    let root = null;
    root = newNode(10);
    root.left = newNode(2);
    root.right = newNode(7);
    root.left.left = newNode(8);
    root.right.right = newNode(6);
 

    binaryTreeToBST(root);
 
    document.write(
    "Following is Inorder Traversal of the converted BST: "+
    "</br>");
    printInorder(root);