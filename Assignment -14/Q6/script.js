var rotateRight = function(head, k) {

	if(!head || !head.next || k===0) return head;
	let tail = head;
	let len = 1
	while(tail.next){
		tail= tail.next;
		len++;
	}
	
	k=k%len;
	let prev=null;
	let temp = head;
	let count = 1;
	while(count <= len-k){
		prev=temp;
		temp=temp.next;
		count++;
	}
	if(!prev || !temp) return head;
	prev.next=null;
	tail.next= head;
	return temp;  
	};