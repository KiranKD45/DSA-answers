var trap = function(height) {
    let stack = new Stack()
    let i = 0
    let ret = 0
    while(i < height.length) {
        if (stack.isEmpty() || height[i] <= height[stack.peek()]) {
            stack.push(i++)
        } else {
            let middle = stack.pop()
            if (!stack.isEmpty()) {
                let minHeight = Math.min(height[i], height[stack.peek()])
                ret += (minHeight - height[middle]) * (i - stack.peek() - 1)
            }
        }
    }
    return ret
};

class Stack {
    constructor() {
        this.stack = []
    }
    push(a) {
        this.stack.push(a)
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    size() {
        return this.stack.length
    }
    isEmpty() {
        return this.stack.length == 0
    }
}