{
  const obj = {
    name: "sameer",
    office: {
      name: "Infa",
      address: {
        street: "redwood",
        pincode: "1234"
      } 
    }
  
  }
  
  function Flatern(obj, prefix="", result = {}) {
    var keys = Object.keys(obj);
    result = keys.reduce((acc, key) => {
      let newName = prefix + key;
      if(typeof obj[key] === "object" && Object.keys(obj[key]).length > 0) {
        Flatern(obj[key], newName+"_", acc);
      } else {
        acc[newName] = obj[key];
      }
      return acc;
    }, result);
    return result;
  }
  
  
  const result = Flatern(obj);
  console.log(result);
  
//   {"name":"sameer","office_name":"Infa","office_address_street":"redwood","office_address_pincode":"1234"}
}
