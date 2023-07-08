class Node
{
     
    constructor( data)
    {
        this.data = data;
        this.left=this.right=null;
    }
};
 

function flipBinaryTree(root)
{
     if (root == null)
        return root;
    if (root.left == null && root.right ==null)
        return root;

    let flippedRoot=flipBinaryTree(root.left);

  
    root.left.left=root.right;
    root.left.right=root;
    root.left=root.right=null;
    return flippedRoot;
}
 

function printLevelOrder(root)
{
    if(root==null)
        return ;
      

    let q=[];

    q.push(root);
    while(true)
    {
        let nodeCount = q.length;
        if (nodeCount == 0)
            break;
        
        while (nodeCount > 0)
        {
            let node = q.shift();
            document.write(node.data+" ");
            if (node.left != null)
                q.push(node.left);
            if (node.right != null)
                q.push(node.right);
            nodeCount--;
        }
        document.write("<br>");
    }
}