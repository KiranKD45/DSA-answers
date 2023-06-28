class Node {
    constructor() {
      this.data = 0;
      this.left = null;
      this.right = null;
    }
  }
  function getNode(data) {
    
    var newNode = new Node();

    newNode.data = data;
    newNode.left = newNode.right = null;
    return newNode;
  }

  function LevelOrder(root, data) {
    if (root == null) {
      root = getNode(data);
      return root;
    }

    if (data <= root.data)
    root.left = LevelOrder(root.left, data);
    else
    root.right = LevelOrder(root.right, data);
    return root;
  }

  function constructBst(arr, n) {
    if (n == 0) return null;
    var root = null;

    for (var i = 0; i < n; i++)
    root = LevelOrder(root, arr[i]);

    return root;
  }

  function inorderTraversal(root) {
    if (root == null) return;

    inorderTraversal(root.left);
    document.write(root.data + " ");
    inorderTraversal(root.right);
  }