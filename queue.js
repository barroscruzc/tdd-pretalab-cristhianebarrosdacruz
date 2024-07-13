class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length;
  }

  add(item){
    this.elements.push(item);
  }

  peek(){
    return this.elements[0];
  }

  dequeue(){
    this.elements.splice(0, 1);
  }
}

module.exports = Queue