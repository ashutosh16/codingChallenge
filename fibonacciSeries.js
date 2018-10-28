// fibonacci series.
{
  function Fibonacci(n) {
    
    if(n === 1 || n === 0) {
      console.log(0);
    } else
    if(n === 2) {
      console.log(1);
    } else {
      let first = 0, second = 1, counter = 3;
      console.log(first);
      console.log(second);
      while (counter <= n) {
        console.log(first + second);
        let temp = second;
        second = first + second;
        first = temp;
        counter ++;
      } 
    }
    
  }

  Fibonacci(5);
}