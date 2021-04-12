// Implement document.getElementById & myGetElementByClassName

document.myGetElementByCallback = function(callback){
  const stack = [this];
  while(stack.length){
    const node = stack.pop();
    if(callback(node)){
      return node;
    }
    stack.push(...node.children);
  }
  return null;
}

document.myGetElementById = function(id) {
  return this.myGetElementByCallback((node)=>node.id===id);
}

document.myGetElementByClassName = function(className) {
  return this.myGetElementByCallback((node)=>node.classList.contains(className));
}
// document.myGetElementById("abc")

// console.log(document) -->  #document
// console.log(document.children) --> [html]






