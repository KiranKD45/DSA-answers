class QueueStack{
    constructor(){
        this.q1 = new Queue();  
        this.q2 = new Queue();  
    }
    
    /**
     * @param {number} x
    */
    push(x)
    {
        while(!this.q1.empty())
        {
            let k = this.q1.front_ele();
            this.q1.pop();
            this.q2.push(k);
        }
        this.q1.push(x);
        while(!this.q2.empty())
        {
            let k = this.q2.front_ele();
            this.q2.pop();
            this.q1.push(k);
        }
    }
    
    /**
     * @returns {number}
    */
    
   
    pop()
    {
    
        if(!this.q1.empty())
        {
        
            let r = this.q1.front_ele();
            this.q1.pop();

            return r;
        }
    
        return -1;
    }
}