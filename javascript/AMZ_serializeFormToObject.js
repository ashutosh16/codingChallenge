function Serialize(domElement){
  const add = (key, value, target) => {
    const path = key.split(".");
    let curr = target;
    while(path.length>1) {
      const key = path.shift();
      if(!curr[key]) {
        curr[key] = {};
      }
      curr = curr[key];
    }
    // not present
    if(!curr[path[0]]) {
      curr[path[0]] = value;
    } else {
      // present with arr
      // present with primitive -> if more value has same name then create the array and add value in arr.
      Array.isArray(curr[path[i]]) ?  curr[path[i]].push(value) : curr[path[i]] = [curr[path[i]] , value];
    }
    return target;
  };
  
  const arr = domElement.querySelectorAll("input");
  
  return arr.reduce((acc, item)=>add(item.name, item.value, acc), {});
}

// <form action="/action_page.php">
//   <input type="text" id="fname" name="name" value="John"><br>
//   <input type="text" id="lname" name="office.name" value="AMZ"><br><br>
//   <input type="text" id="lname" name="office.address.street" value="palo alto"><br><br>
//   <input type="text" id="lname" name="office.address.pincode" value="54042"><br><br>
//   <input type="text" id="lname" name="office.address.cell" value="1234567890"><br><br>
//   <input type="submit" value="Submit">
// </form> 

Serialize(document.querySelector("form"));
// {"name":"sameer","office":{"name":"AMZ","address":{"street":"palo alto","pincode":54042,"phone":{"cell":1234567890}}}}

// We can consider this as input.
// [["name", "sameer"], ["office.name", "AMZ"], ["office.address.street", "palo alto"], ["office.address.pincode", 54042], ["office.address.cell", 1234567890]]

