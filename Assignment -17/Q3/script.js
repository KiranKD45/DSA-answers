var countStudents = function(students, sandwiches) {
    let count=0;
	
    while(count<students.length && students.length>0){
        if(students[0]==sandwiches[0]){
            count=0;
			students.shift(); sandwiches.shift();
        }else{
            count++;
			students.push(students.shift());
        }
    }
    return students.length;
};