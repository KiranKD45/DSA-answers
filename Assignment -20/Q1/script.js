 class Node
    {
        constructor(key) {
           this.left = null;
           this.right = null;
           this.key = key;
        }
    }
 
    let v;
    function newNode(key)
    {
        let temp = new Node(key);
        return temp;
    }
 
    function findLargestSubtreeSumUtil(root)
    {
        if (root == null)    
            return 0;
        let currSum = root.key +
        findLargestSubtreeSumUtil(root.left) +
        findLargestSubtreeSumUtil(root.right);

        v = Math.max(v, currSum);
 
        return currSum;
    }
 
    function findLargestSubtreeSum(root)
    {
        if (root == null)    
            return 0;
        v = -9999999;
        findLargestSubtreeSumUtil(root);
 
        return v;
    }