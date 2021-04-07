// Example
// JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b'])
// 'a,b "1","2" "3","4" "6","" "","7"'

function JSONtoCSV(arr, column, seperator) {
  let result = column.join(seperator) + " ";

  return (
    result +
    arr
      .map((obj) => {
        let str = "";
        column.forEach((key, index) => {
          index !== 0 && (str += seperator);
          str += obj[key] ? `"${obj[key]}"` : '""';
        });
        return str;
      })
      .join(" ")
  );
}

JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b']);
// a,b "1","2" "3","4" "6","" "","7"

// Simplified solution
function JSONtoCSV(arr, col){
  const result = [col.join(",")];
  result.push(
    ...arr.map(item=>col.map((key)=>(item[key] ? item[key] : '""')).join(","))
  )
  return result.join(" ");
}

// Contact the same above solution
function JSONtoCSV(arr, col) {
  return [col.join(","), ...arr.map((item) => col.map((key) => (item[key] ? item[key] : '""')).join(","))].join(" ");
}
