class Node {
    constructor(key) {
      this.data = key; 
      this.hd = 1000000; 
      this.left = null; 
      this.right = null;
    }
  }


  class Tree {
    constructor(node) {
      this.root = node;
    }


    bottomView() {
      if (this.root == null) return;

      var hd = 0;

      var map = {};

      var queue = [];

      this.root.hd = hd;
      queue.push(this.root);

      while (queue.length != 0) {
        var temp = queue.shift();

        hd = temp.hd;

        map[hd] = temp.data;

        if (temp.left != null) {
          temp.left.hd = hd - 1;
          queue.push(temp.left);
        }

        if (temp.right != null) {
          temp.right.hd = hd + 1;
          queue.push(temp.right);
        }
      }

      for (const [key, value] of Object.entries(map).sort(
        (a, b) => a[0] - b[0]
      )) {
        document.write(value + " ");
      }
    }
  }