var deckRevealedIncreasing = function(deck) {
    let stack = deck.sort((a, b) => b - a)
    let queue = [stack.shift()]
        
    while (stack.length > 0) {
        queue.unshift(queue.pop())
        queue.unshift(stack.shift())
    }   
     return queue;
    
};