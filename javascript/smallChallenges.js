{
  // Insert element in given index in JS
  var a = ['jan', 'feb', 'Apr', 'may'];
  a.splice(2, 0, 'Mar');
  console.log(a);//['jan', 'feb', 'Mar', Apr', 'may']

}

{
  // Swap two elements in array or variable.
  var a = ['jan', 'feb', 'Apr', 'may'];
  [a[0], a[4]] = [a[4], a[0]];
}

{
  // Find the middle of the link list.
  // 1. start i & j with head
  // 2. increment j++; and j += 2
  // 3. while j!== null || j.next !== null
}


{
  // reverse the words.
  function reverse(str){
    var a = str.split(' '),
      tempStr = '';

    while (a.length !== 0) {
      tempStr = tempStr + ' ' + a.pop();
    }
    return tempStr;
  }

  var a = 'i am good one';
  console.log(reverse(a));
}

{
  // Rotate the given array.
  function Rotate(arr){
    var i = arr.length - 2;
    while(i >= 0) {
      let temp = arr.splice(i,1);
      arr.push(temp[0]);
      i--;
    }
    console.log(arr);
    return arr;
  }
  console.log('Rotated array ' + Rotate([1,2,3,4,5]));
}


{
  // Find name in string starting with @
  var nameString = 'My name is @satyajit'
  function getName(str) {
    let nameList = [];
    str = str.split(' ');
    // str.split('\n')
    for(word of str) {
      if(word[0] === '@') {
        nameList.push(word);
      }
    }
    console.log(nameList);
    return nameList;
  }
  getName(nameString);
}
