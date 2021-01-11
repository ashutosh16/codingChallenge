// https://leetcode.com/problems/employee-importance/submissions/

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

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


[[1,5,[2,3]],[2,3,[]],[3,3,[]]]
1
