class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = this.right = this.nextRight = null;
    }
}
 
let root;
 
function connect(p)
{
        let q = [];
  
        q.push(root); 
        let temp = null; 
        while (q.length!=0) {
            let n = q.length;
            for (let i = 0; i < n; i++) {
                let prev = temp;
                temp = q.shift();
  
        
                if (i > 0)
                    prev.nextRight = temp;
  
                if (temp.left != null)
                    q.push(temp.left);
  
                if (temp.right != null)
                    q.push(temp.right);
            }

            temp.nextRight = null;
        }
}