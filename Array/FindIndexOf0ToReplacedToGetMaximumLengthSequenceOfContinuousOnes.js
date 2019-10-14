/**
 * Find index of 0 to replaced to get maximum length sequence of continuous ones
 */
{
  function getIndex(a){
    let count = 0,
      max_index = -1,
      max_count = 0,
      last0Index = -1;

      for(let i=0; i < a.length; i++) {
        if(a[i] === 1) {
          count++;
        } else {
          if (a[i] === 0) {
            count = (i - last0Index);
            last0Index = i;
          }
        }
        
        if(count > max_count) {
          max_count = count;
          max_index = last0Index;
        }
      }
    return last0Index;
  }

  let result = getIndex([0,0,1,0,1,1,1,0,1,1]);
  console.log(result);
}
