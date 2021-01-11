// https://leetcode.com/problems/employee-importance/submissions/

// Definition for Employee.
function Employee(id, importance, subordinates) {
 this.id = id;
 this.importance = importance;
 this.subordinates = subordinates;
}

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let map = {};
    for(let emp of employees) {
      map[emp.id] = {
        importance: emp.importance,
        subordinates: emp.subordinates
      }
    }
    
    if(!map[id]) return 0;
    
    let importance = 0;
    let queue = [id];
    while(queue.length){
      let sub = queue.shift();
      importance += map[sub].importance;
      if(map[sub].subordinates.length) {
        queue.push(...map[sub].subordinates);
      }
    }
  return importance;
};


GetImportance([{id: 1, importance: 5, subordinates: [2,3] }, {id: 2, importance: 3, subordinates: [] }, {id: 3, importance: 3, subordinates: [4]}, {id: 4, importance: 4, subordinates: []}], 1);
// 15
