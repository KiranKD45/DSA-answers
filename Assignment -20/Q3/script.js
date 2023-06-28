class NodeDetails
{
    constructor()
    {
       this.min;
       this.max;
       this.data;
    }
}

function levelOrderIsOfBST(arr, n)
{
    if (n == 0)
        return true;
 

    let q = [];

    let i = 0;
 
    let newNode = new NodeDetails();
    newNode.data = arr[i++];
    newNode.min = Number.MIN_VALUE;
    newNode.max = Number.MAX_VALUE;
    q.push(newNode);

    while (i != n && q.length > 0)    
    {
         
        let temp = q[0];
        q.shift();
        newNode = new NodeDetails();
 

        if (i < n && (arr[i] < temp.data &&
                      arr[i] > temp.min))
        {
             
            newNode.data = arr[i++];
            newNode.min = temp.min;
            newNode.max = temp.data;
            q.push(newNode);            
        }
 
        newNode = new NodeDetails();
        if (i < n && (arr[i] > temp.data &&
                      arr[i] < temp.max))
        {
            
            newNode.data = arr[i++];
            newNode.min = temp.data;
            newNode.max = temp.max;
            q.push(newNode);        
        }    
    }
    if (i == n)
    return false;    
}