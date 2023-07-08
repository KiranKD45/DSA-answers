class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
var root ;
var max_level = 0;
function leftViewUtil(node, level)
{
    if (node == null)
    {
        return;
    }
    
    if (max_level < level)
    {
        document.write(" " + node.data);
        max_level = level;
    }
     
    leftViewUtil(node.left, level + 1);
    leftViewUtil(node.right, level + 1);
}
 
function leftView()
{
    leftViewUtil(root, 1);
}