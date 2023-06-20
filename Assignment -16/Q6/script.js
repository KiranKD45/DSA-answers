class Queue {
    constructor() {
      this.items = [];
    }
    push(element) {
      return this.items.push(element);
    }
    pop() {
      if (this.items.length > 0) {
        return this.items.shift();
      }
    }
    front() {
      return this.items[0];
    }
    isEmpty() {
      return this.items.length == 0;
    }
    size() {
      return this.items.length;
    }
  }

  function reverseFirstK(queue, k) {
    solve(queue, k);
    let s = queue.size() - k;
    while (s-- > 0) {
      let x = queue.front();
      queue.pop();
      queue.push(x);
    }
    return queue;
  }
   
  function solve(queue, k) {
    if (k == 0) return;
    let e = queue.front();
    queue.pop();
    solve(queue, k - 1);
    queue.push(e);
  }