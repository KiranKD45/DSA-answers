class Node{
    constructor(key){
        this.key = key;
        this.next = null;
    }
}
 
function newNode(key){
    let temp = new Node(key);
    return temp;
}
//D.C
let a = newNode(5);
a.next = newNode(10);
a.next.next = newNode(15);
a.next.next.next = newNode(40);
 
let b = newNode(2);
b.next = newNode(3);
b.next.next = newNode(20);
 
let v = [];
while(a != null){
    v.push(a.key);
    a = a.next;
}
 
while(b != null){
    v.push(b.key);
    b = b.next;
}
 
v.sort(function(a, b){return a - b});
let result = newNode(-1);
let temp = result;
for(let i = 0; i<v.length; i++){
    result.next = newNode(v[i]);
    result = result.next;
}
temp = temp.next;
console.log("Resultant Merge Linked List is : ");
while(temp != null){
    console.log(temp.key + " ");
    temp = temp.next;
}