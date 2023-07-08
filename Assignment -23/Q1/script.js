function findDepthRec(tree, n, index)
    {
        if (index >= n || tree[index] == 'l')
            return 0;

        index++;
        let left = findDepthRec(tree, n, index);

        index++;
        let right = findDepthRec(tree, n, index);
  
        return Math.max(left, right) + 1;
    }
  
    function findDepth(tree, n)
    {
        let index = 0;
        return (findDepthRec(tree, n, index));
    }
     
    let tree = "nlnnlll".split('');
    let n = tree.length;
    document.write(findDepth(tree, n));