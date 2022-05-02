const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class ListNode {
  constructor(x) {
  this.data = x;
  this.leftChild = null;
  this.rightChild = null;
 }
}
class BinarySearchTree {
  constructor(){
      this._root = null;
  }
/// вернуть корневой узел дерева
root() {
return this._root;
}
// добавление
add(data) {
  let nod = this._root;
  let addNode = new ListNode(data);
  if(nod == null) { this._root = addNode; return;}

  while(nod!=null){
      if(data == nod.data) {return;}
     
      if(data > nod.data) {
                  if(nod.rightChild!=null){nod = nod.rightChild;} 
                  else{nod.rightChild = addNode;}
             }
             if(data < nod.data) {
               if(nod.leftChild!=null){nod = nod.leftChild;} 
               else{nod.leftChild = addNode;}
          }
  }
}

has(data) {
   let nod = this._root;
   let result = false;
   while(nod!=null){
       if(nod.data ==data){return true;}
       else if(data > nod.data ){
           nod = nod.rightChild;
       }
       else{
           //(data < node.value )
           nod = nod.leftChild;
       }  
   }
   return result;
}

find(data) {
   let nod = this._root;
   let result = null;
   while(nod!=null){
       if(nod.data ==data){return nod;}
       else if(data > nod.data ){
           nod = nod.rightChild;
       }
       else{
           //(data < node.value )
           nod = nod.leftChild;
       }  
   }
   return result;
}

remove(data) {
   
 this._root = delete_(this._root,data);

   function delete_(nod,value){
     if(nod == null){
         return nod;
     }  
     
     if(nod.data > value) {
         nod.leftChild  = delete_(nod.leftChild,value);
         return nod;
     } 
    else if(nod.data < value) {
       nod.rightChild  = delete_(nod.rightChild,value);
       return nod;
   } 
   else{
       if(nod.leftChild == nod.rightChild){
           return null;
       }

       if(nod.leftChild == null){
           nod = nod.rightChild;
           return nod;
       }
       if(nod.rightChild == null){
           nod = nod.leftChild;
           return nod;
       }

     ////с центра
     let min = nod.rightChild;
     while(min.leftChild!=null){
         min = min.leftChild;
     }
     nod.data = min.data;
     nod.rightChild = delete_(nod.rightChild,min.data);
    return nod;
   }        

   }
 }
min() {
   let nod = this._root;
 let min;
 while(nod!=null){
     min = nod.data;
     nod = nod.leftChild;
 }
 return min;
}

max() {
 let nod = this._root;
 let max;
 while(nod!=null){
     max = nod.data;
     nod = nod.rightChild;
 }
 return max;
}  
}

module.exports = {
  BinarySearchTree
};