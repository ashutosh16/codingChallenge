function queue() {
  let list = [];
  return {
    add(n) {
      list.push(n);
      return list;
    },
    remove() {
      return list.shift();
    },
    show(){
      return list;
    }
  }
}
t.add(1);
t.add(2);
t.add(3);
t.add(4);
t.show(); //[1, 2, 3, 4]
t.remove(); //1
t.show(); //[2, 3, 4]
