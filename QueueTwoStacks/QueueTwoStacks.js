const QueueTwoStacks = function() {
  this.inStack = [];
  this.outStack = [];
};

QueueTwoStacks.prototype.enqueue = function(item) {
  this.inStack.push(item);
};

QueueTwoStacks.prototype.dequeue = function() {
  if (this.outStack.length === 0 ) {
    while (this.inStack.length === 0) {
      let newestInStackItem = this.inStack.pop();
      this.outStack.push(newestInStackItem);
    }

    if (this.outStack.length === 0) {
      return undefined;
    }
  }
  return this.outStack.pop();
};