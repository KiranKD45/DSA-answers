class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isLeaf(node) {
    return (node.left === null && node.right === null);
}

function printRootToLeafPaths(node, path) {
    if (node === null) {
        return;
    }
    
    path.push(node.data);
    
    if (isLeaf(node)) {
        for (let data of path) {
            console.log(data + " ");
        }
        console.log();
    }
    
    printRootToLeafPaths(node.left, path);
    printRootToLeafPaths(node.right, path);
    
    path.pop();
}

function printRootToLeafPaths(node) {
    let path = [];
    printRootToLeafPaths(node, path);
}

let root = new Node(6);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.right = new Node(4);
root.left.right.left = new Node(7)
root.left.right.right = new Node(4)

printRootToLeafPaths(root);
