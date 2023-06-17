class Node {
    constructor(val) {
        this.data = val;
        this.down = null;
        this.next = null;
    }
}
function merge(a,  b) {

if (a == null)
    return b;
if (b == null)
    return a;

var result;

if (a.data < b.data) {
    result = a;
    result.down = merge(a.down, b);
}

else {
    result = b;
    result.down = merge(a, b.down);
}

result.right = null;
return result;
}

function flatten(root) {
if (root == null || root.right == null)
    return root;
root.right = flatten(root.right);
root = merge(root, root.right);
return root;
}

function push(head_ref , data) {
 var new_node = new Node(data);
new_node.down = head_ref;
head_ref = new_node;
return head_ref;
}

function printList() {
var temp = head;
while (temp != null) {
    document.write(temp.data + " ");
    temp = temp.down;
}
document.write();
}