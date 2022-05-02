const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class ListNode {
  constructor(x) {
  this.value = x;
  this.next = null;
 }}
 class Queue {

  constructor(){
      this.node;
  }

getUnderlyingList() {
 return this.node;
}

enqueue(value ) {
  var t = this.node;
  if(this.node == undefined){
      this.node = new ListNode();
      this.node.next = null;
      this.node.value = value;
  }
  else{
     
       let n = this.node;
       while(n.next!=null){
         n = n.next;
       }
      let nod = new ListNode();
      nod.value =value;
      n.next = nod;
      nod.next = null;      
  }
 var z;
}

dequeue() {
   let nod = this.node;        

   if (nod!=undefined){
     
    let res = this.node.value;
    this.node = this.node.next;
    return res;
    }
         while(nod.next!=null){
             
              if(this.node.next == null){
                   return nod.value
                  }
              nod = nod.next;  
         } 
}
}

module.exports = {
  Queue
};
