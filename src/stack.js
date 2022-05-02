const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  
  constructor(){
      this.list = new Array();
  }

  push( element ) {
     this.list.push(element);
  }

  pop() {
      let index = this.list.length-1;
      let item = undefined;
      if(index>=0){
          item = this.list[index];
          this.list.splice(index,1);          
      }

    return  item; 
  }

  peek() {
  return  this.list.length ==0 ? undefined:this.list[this.list.length-1];     
}
}

module.exports = {
  Stack
};
